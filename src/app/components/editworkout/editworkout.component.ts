import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/classes/classes';
import { addCookie, grabUser } from 'src/app/functions/userFunc';
import { UserService } from 'src/app/services/user/user.service';
import { WorkoutService } from 'src/app/services/workout/workout.service';

@Component({
  selector: 'app-editworkout',
  templateUrl: './editworkout.component.html',
  styleUrls: ['./editworkout.component.css']
})
export class EditworkoutComponent implements OnInit {

  user : User = grabUser();
  workoutForm : FormGroup;
  // newUser = null;

  workoutObject = {
      id: 0,
      name: '',
      user: {
        id: this.user.id
    },
      exercises: [],
      customExercises: [],
      combinedExercises: null
  };

  @Input() workout;
  @Output() onWorkout: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private workoutService: WorkoutService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.workoutForm = this.formBuilder.group({
      name: this.workout.name
    });
  }

  setWorkout() {
    this.onWorkout.emit(false);
  }

  onSubmit(): void {
    this.workoutObject.id = this.workout.id;
    this.workoutObject.name = this.workoutForm.value.name;
    this.workoutObject.user.id = this.user.id;
    this.workoutObject.exercises = this.workout.exercises;
    this.workoutObject.customExercises = this.workout.customExercises;
    this.workoutService.update(this.workout).toPromise().then(data => {
      this.setWorkout();
      window.location.reload();
      alert("Workout edited");
    });

  }
}

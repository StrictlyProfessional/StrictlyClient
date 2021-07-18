import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { User } from 'src/app/classes/classes';
import { WorkoutService } from 'src/app/services/workout/workout.service';
import { grabUser, addCookie } from 'src/app/functions/userFunc';

@Component({
  selector: 'app-addworkout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css']
})
export class AddworkoutComponent implements OnInit {

  user : User = grabUser();
  workoutForm : FormGroup;
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

  @Output() onWorkout: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workoutForm = this.formBuilder.group({
      name: ['']
    });
  }

  setWorkout() {
    this.onWorkout.emit(false);
  }

  onSubmit(): void {
    this.workoutObject.name = this.workoutForm.value.name;
    this.workoutService.add(this.workoutObject).subscribe(workout => this.workoutObject = workout);
    this.user.workouts.push(this.workoutObject);
    addCookie(this.user);
    this.setWorkout();
    window.location.reload();
    alert("Workout added");
  }

}
// creating a new workout will only take the name then you can add exercises from another page

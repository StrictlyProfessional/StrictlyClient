import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { User } from 'src/app/classes/classes';
import { WorkoutService } from 'src/app/services/workout/workout.service';
import { grabUser, addCookie } from 'src/app/functions/userFunc';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-addworkout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css']
})
export class AddworkoutComponent implements OnInit {

  user : User = grabUser();
  newUser = null;
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
  newWorkout: any;

  constructor(
    private formBuilder: FormBuilder,
    private workoutService: WorkoutService,
    private userService: UserService
  ) { }

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
    this.newWorkout = this.workoutService.add(this.workoutObject).toPromise().then(data => {
      this.workoutObject = data;
      this.user.workouts.push(this.workoutObject);
      console.log(this.workoutObject);
      addCookie(this.user);
      console.log("Promise Resolved");
      this.setWorkout();
      window.location.reload();
      alert("Workout added");
    });
  }



}
// creating a new workout will only take the name then you can add exercises from another page

import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Workout, User } from 'src/app/classes/classes';
import { UserService } from 'src/app/services/user/user.service';
import { WorkoutService } from 'src/app/services/workout/workout.service';
import { grabUser, addCookie } from 'src/app/functions/userFunc';

@Component({
  selector: 'app-addworkout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css']
})
export class AddworkoutComponent implements OnInit {

  user : User = grabUser();
  newUser: User = null;
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

  constructor(private formBuilder: FormBuilder, private userService : UserService, private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workoutForm = this.formBuilder.group({
      name: ['']
    });
  }

  setWorkout() {
    this.onWorkout.emit(false);
  }

  onSubmit(): void {
    // console.log("Reached onSubmit");
    // console.log(this.user.workouts);
    this.workoutObject.name = this.workoutForm.value.name;
    this.workoutService.add(this.workoutObject).subscribe(workout => this.workoutObject = workout);
    this.user.workouts.push(this.workoutObject);
    addCookie(this.user);
    //this.userService.update(this.user);
    this.setWorkout();
    window.location.reload();
    alert("Workout added");
  }


  private newMethod() {
    return this;
  }
}
// creating a new workout will only take the name then you can add exercises from another page

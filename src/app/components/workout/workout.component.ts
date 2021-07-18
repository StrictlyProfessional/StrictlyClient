import { Component, Input, OnInit } from '@angular/core';
import { User, Workout } from 'src/app/classes/classes';
import { grabUser, addCookie } from 'src/app/functions/userFunc';
import { WorkoutService } from 'src/app/services/workout/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  editworkout: boolean = false;
  user : User = grabUser();

  constructor(
    private workoutService : WorkoutService,
  ) { }

  @Input() workoutArr;

  ngOnInit(): void {
  }

  deleteWorkout(workout) {
    console.log("Delete method called")
    this.workoutService.delete(workout.id);
    let workoutIndex = this.user.workouts.findIndex(x => x.id === this.workoutArr.id);
    this.user.workouts.splice(workoutIndex, 1);

    addCookie(this.user);
    window.location.reload();
  }

  changeWorkout(val: boolean) {
    this.editworkout = val;
  }

}

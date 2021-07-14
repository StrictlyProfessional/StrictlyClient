import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/classes/classes';
import { WorkoutService } from 'src/app/services/workout/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  private error = "lol didnt work";
  workouts: Workout[] = [];
  isLoaded: boolean = true;

  constructor(private WorkoutService: WorkoutService) { }

  ngOnInit(): void {
    this.getWorkouts();
  }
  getWorkouts() {
    this.WorkoutService.getWorkouts().subscribe(
      allWorkouts => this.workouts = allWorkouts,
      err => this.error = err
    );
    this.isLoaded = true;
  }
}

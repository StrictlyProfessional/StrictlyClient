import { Component, Input, OnInit } from '@angular/core';
import { Workout } from 'src/app/classes/classes';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  constructor() { }

  @Input() workoutArr;

  ngOnInit(): void {
  }

}

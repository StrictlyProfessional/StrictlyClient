import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-exercise',
  templateUrl: './custom-exercise.component.html',
  styleUrls: ['./custom-exercise.component.css']
})
export class CustomExerciseComponent implements OnInit {

  constructor() { }

  @Input() custExercise;

  ngOnInit(): void {
  }

}

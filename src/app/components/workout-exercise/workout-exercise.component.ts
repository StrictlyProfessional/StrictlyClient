import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { eCard } from 'src/app/classes/cardinterfaces';
import { User } from 'src/app/classes/classes';
import { grabUser, clearCookies, addCookie } from 'src/app/functions/userFunc';

@Component({
  selector: 'app-workout-exercise',
  templateUrl: './workout-exercise.component.html',
  styleUrls: ['./workout-exercise.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
  
export class WorkoutExerciseComponent implements OnInit {

  data: eCard = {
    state: "default"
  };
  selectedOption: string;
  user: User = grabUser();
  options = [];
  isComplete: boolean = false;

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }

  constructor() { }

  @Input() exercise;
  @Input() currentWorkout;

  ngOnInit(): void {
  }

  onComplete() {
    if (this.isComplete === false) {
      this.isComplete = true;
    } else {
      this.isComplete = false;
    }

    let workoutIndex = this.user.workouts.findIndex(x => x.id === this.currentWorkout.id);
    let exerciseIndex = this.user.workouts[workoutIndex].exercises.findIndex(y => y.id === this.exercise.id);

    let cExercise = this.user.workouts[workoutIndex].exercises[exerciseIndex]

    if (cExercise["completed"]) {
      this.user.workouts[workoutIndex].exercises[exerciseIndex]["completed"] = false;
    } else {
      this.user.workouts[workoutIndex].exercises[exerciseIndex]["completed"] = true;
    }

    addCookie(this.user);
  }

  onDelete() {
    let workoutIndex = this.user.workouts.findIndex(x => x.id === this.currentWorkout.id);
    let exerciseIndex = this.user.workouts[workoutIndex].exercises.findIndex(y => y.id === this.exercise.id);

    this.user.workouts[workoutIndex].exercises.splice(exerciseIndex, 1);
    
    addCookie(this.user);
    window.location.reload();
  }
}

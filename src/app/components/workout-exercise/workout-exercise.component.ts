import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { eCard } from 'src/app/classes/cardinterfaces';
import { User } from 'src/app/classes/classes';
import { grabUser, clearCookies, addCookie, calculateLevel } from 'src/app/functions/userFunc';
import { WorkoutService } from 'src/app/services/workout/workout.service';
import { UserService } from 'src/app/services/user/user.service';

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
  isCustom: boolean = false;

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }

  constructor(private ws: WorkoutService,
    private us: UserService
  ) { }

  @Input() exercise;
  @Input() custExercise;
  @Input() currentWorkout;

  ngOnInit(): void {
    this.determineCustOrNot();
  }

  onComplete() {
    if (this.isComplete === false) {
      this.isComplete = true;
    } else {
      this.isComplete = false;
    }
    if(this.isCustom) {
      let workoutIndex = this.user.workouts.findIndex(x => x.id === this.currentWorkout.id);
      let exerciseIndex = this.user.workouts[workoutIndex].customExercises.findIndex(y => y.id === this.custExercise.id);

      let cExercise = this.user.workouts[workoutIndex].customExercises[exerciseIndex];

      if (cExercise["completed"]) {
        this.user.workouts[workoutIndex].customExercises[exerciseIndex]["completed"] = false;
      } else {
        this.user.workouts[workoutIndex].customExercises[exerciseIndex]["completed"] = true;
      }

      addCookie(this.user);
      this.data.state = 'default';
      this.addExperience();

    }
    else {
      let workoutIndex = this.user.workouts.findIndex(x => x.id === this.currentWorkout.id);
      let exerciseIndex = this.user.workouts[workoutIndex].exercises.findIndex(y => y.id === this.exercise.id);

      let cExercise = this.user.workouts[workoutIndex].exercises[exerciseIndex]

      if (cExercise["completed"]) {
        this.user.workouts[workoutIndex].exercises[exerciseIndex]["completed"] = false;
      } else {
        this.user.workouts[workoutIndex].exercises[exerciseIndex]["completed"] = true;
      }

      addCookie(this.user);
      this.data.state = 'default';
      this.addExperience();


    }

  }

  onDelete() {
    if(this.isCustom) {
      let workoutIndex = this.user.workouts.findIndex(x => x.id === this.currentWorkout.id);
      let exerciseIndex = this.user.workouts[workoutIndex].customExercises.findIndex(y => y.id === this.custExercise.id);

      this.user.workouts[workoutIndex].customExercises.splice(exerciseIndex, 1);
      addCookie(this.user);
      alert("Exercise removed from workout");
      window.location.reload();
      this.ws.update(this.user.workouts[workoutIndex]).subscribe(data => {

      });
    }
    else {
      let workoutIndex = this.user.workouts.findIndex(x => x.id === this.currentWorkout.id);
      let exerciseIndex = this.user.workouts[workoutIndex].exercises.findIndex(y => y.id === this.exercise.id);

      this.user.workouts[workoutIndex].exercises.splice(exerciseIndex, 1);
      addCookie(this.user);
      alert("Exercise removed from workout");
      window.location.reload();
      this.ws.update(this.user.workouts[workoutIndex]).subscribe(data => {

      });
    }
  }

  determineCustOrNot() {
    if(this.exercise == null || this.exercise == undefined) {
      this.isCustom = true;
    }
    else {
      this.isCustom = false;
    }
  }

  addExperience() {
    console.log(this.user.experience)
    this.user.experience = this.user.experience + 5;
    let newLevel = Math.floor((this.user.experience * 420)/69);
    this.user.userLevel = newLevel;
    addCookie(this.user);
    this.us.update(this.user).subscribe(data =>{
      window.location.reload();
    });
    
    console.log(this.user.experience);
  }
}

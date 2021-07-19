import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { eCard } from 'src/app/classes/cardinterfaces';
import { User } from 'src/app/classes/classes';
import { grabUser, clearCookies, addCookie } from 'src/app/functions/userFunc';
import { HttpClient } from '@angular/common/http';
import { WorkoutService } from 'src/app/services/workout/workout.service';
import { strictlyUpdate } from 'src/app/functions/fetch';

const updateURL = "http://ec2-54-175-70-128.compute-1.amazonaws.com:8080/strictly/workouts/update"

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
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
  
export class ExerciseComponent implements OnInit {
  data: eCard = {
    state: "default"
  };

  selectedOption: string;
  user: User = grabUser();
  options = [];

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }

  constructor(
    private httpClient: HttpClient,
    private ws: WorkoutService
  ) { }

  @Input() exercise;

  ngOnInit(): void {
    this.user = grabUser();
    this.setOptions();
  }
  
  setOptions() {
    let wArr = this.user.workouts;

    wArr.map(w => {
      let wObj = {
        name: "",
        value: 0
      };
      
      wObj["name"] = w.name;
      wObj["value"] = w.id;
      this.options.push(wObj)
    })
  }

  addExercise() {
    let wo = this.selectedOption.split(": ");
    let wArr = this.user.workouts;
    let index = wArr.findIndex(w => w.id === parseInt(wo[0]))
    this.user.workouts[index].exercises.push(this.exercise)
    let aWorkout = this.user.workouts[index];

    let workoutObject = {
      id: aWorkout.id,
      name: aWorkout.name,
      user: {
        id: this.user.id
    },
      exercises: aWorkout.exercises,
      customExercises: aWorkout.customExercises,
      combinedExercises: null
  };

    console.log("------------------------");
    console.log(workoutObject);

    this.ws.update(workoutObject).toPromise().then(data => {
      console.log(data);
      
      addCookie(this.user);
      alert("Success! Exercise Added!");
      window.location.reload();
    });
    
    
  }

}

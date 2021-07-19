import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { eCard } from 'src/app/classes/cardinterfaces';
import { grabUser, addCookie } from 'src/app/functions/userFunc';
import { User } from 'src/app/classes/classes';
import { HttpClient } from '@angular/common/http';
import { WorkoutService } from 'src/app/services/workout/workout.service';

@Component({
  selector: 'app-custom-exercise',
  templateUrl: './custom-exercise.component.html',
  styleUrls: ['./custom-exercise.component.css'],
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

export class CustomExerciseComponent implements OnInit {
  data: eCard = {
    state: "default"
  };

  selectedOption: string;
  user: User = grabUser();
  options = [];
  edit: boolean = false;

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
  constructor(
    private httpClient : HttpClient,
    private ws: WorkoutService
  ) { }

  @Input() custExercise;

  ngOnInit(): void {
    this.setOptions();
  }

  setOptions() {
    let ceArr = this.user.workouts;

    ceArr.map(ce => {
      let wObj = {
        name: "",
        value: 0
      };

      wObj["name"] = ce.name;
      wObj["value"] = ce.id;
      this.options.push(wObj)
    })
  }

  addExercise() {
    let wo = this.selectedOption.split(": ");
    let wArr = this.user.workouts;
    let index = wArr.findIndex(w => w.id === parseInt(wo[0]))
    this.user.workouts[index].customExercises.push(this.custExercise);
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
    console.log(this.user.customExercises);
    this.ws.update(workoutObject).toPromise().then(data => {
      console.log(this.user.customExercises);

      addCookie(this.user);
      alert("Success! Custom Exercise Added!");
      //window.location.reload();
    });
  }

  editExercise() {
    console.log("Edit custom exercise.");
    if(!(this.edit)) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  calculateLevel(){
    let experience = this.user.experience;
    let newLevel = Math.floor((experience * 69)/420);
    this.user.experience = newLevel;
    this.httpClient.post('http://ec2-54-175-70-128.compute-1.amazonaws.com:8080/strictly/users/update',this.user)
    .subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        alert("lol didnt work");
      }
    )
  }

  changeEdit(val: boolean) {
    this.edit = val;
  }
}

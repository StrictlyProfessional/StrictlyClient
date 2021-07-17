import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { eCard } from 'src/app/classes/cardinterfaces';
import { User } from 'src/app/classes/classes';
import { grabUser, clearCookies, addCookie } from 'src/app/functions/userFunc';
import { HttpClient } from '@angular/common/http';

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
  user: User = null;
  options = [];

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }

  constructor(
    private httpClient : HttpClient
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

      console.log(w);
      
      wObj["name"] = w.name;
      wObj["value"] = w.id;
      this.options.push(wObj)
    })
  }

  addExercise() {
    let wo = this.selectedOption.split(": ");
    let wArr = this.user.workouts;
    let index = wArr.findIndex(w => w.id === parseInt(wo[0]))
    console.log(this.exercise);
    console.log(this.user.workouts[index].exercises);
    this.user.workouts[index].exercises.push(this.exercise)
    console.log(this.user.workouts[index].exercises);
    console.log("makes it here");
    addCookie(this.user);
    alert("Success! Exercise Added!")
  }
  calculateLevel(){
    let experience = this.user.experience;
    let newLevel = Math.floor((experience * 69)/420);
    this.user.experience = newLevel;
    this.httpClient.post('http://ec2-3-87-255-246.compute-1.amazonaws.com:8080/strictly/users/update',this.user)
    .subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        alert("lol didnt work");
      }
    )
  }
}

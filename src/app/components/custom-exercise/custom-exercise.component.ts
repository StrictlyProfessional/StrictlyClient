import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { eCard } from 'src/app/classes/cardinterfaces';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/classes/classes';
import { grabUser } from 'src/app/functions/userFunc';

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
  user : User = null;
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

  @Input() custExercise;

  ngOnInit(): void {
    //this might need to be different for custom exercise.
    //this is copying functionality from exercise
    this.user = grabUser();
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

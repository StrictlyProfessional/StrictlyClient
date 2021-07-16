import { Component, OnInit } from '@angular/core';
import { User, Workout } from 'src/app/classes/classes';

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})
export class VaultComponent implements OnInit {

  addWorkout: boolean = false;
  user: User = null;

  constructor() { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = JSON.parse(document.cookie);
  }

  changeWorkout(val: boolean) {
    this.addWorkout = val;
  }

}

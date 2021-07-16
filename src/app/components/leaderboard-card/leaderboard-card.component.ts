import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/classes';
import { LeaderboardService } from 'src/app/services/leaderboard/leaderboard.service';

@Component({
  selector: 'app-leaderboard-card',
  templateUrl: './leaderboard-card.component.html',
  styleUrls: ['./leaderboard-card.component.css']
})
export class LeaderboardCardComponent implements OnInit {

  private error = "lol didnt work";
  users : User[] = [];
  isLoaded : boolean = false;

  constructor(private LeaderboardService : LeaderboardService) { }

  ngOnInit(): void {
  
  }

getUsers(){
  this.LeaderboardService.getUsers().subscribe(
    allUsers => this.users = allUsers,
    err => this.error = err
  );
  this.isLoaded = true;
}
}

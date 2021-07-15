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
  user : User[] = null;
  isLoaded : boolean = true;

  constructor(private LeaderboardService : LeaderboardService) { }

  ngOnInit(): void {
    this.getUsers();
  }

getUsers(){
  this.LeaderboardService.getUsers().subscribe(

  );
  this.isLoaded = true;
}
}

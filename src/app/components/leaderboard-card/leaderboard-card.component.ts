
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { User } from 'src/app/classes/classes';
import { LeaderboardService } from 'src/app/services/leaderboard/leaderboard.service';

@Component({
  selector: 'app-leaderboard-card',
  templateUrl: './leaderboard-card.component.html',
  styleUrls: ['./leaderboard-card.component.css']
})

export class LeaderboardCardComponent implements OnInit {

  isLoaded : boolean = true;
  @Input() user;
  constructor(private LeaderboardService : LeaderboardService) { }

  ngOnInit(): void {
    
  }
}

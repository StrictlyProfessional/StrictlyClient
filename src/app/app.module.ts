import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VaultComponent } from './components/vault/vault.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { LoginComponent } from './components/login/login.component';
import { DiscoveryComponent } from './components/discovery/discovery.component';
import { NavComponent } from './components/nav/nav.component';
import { AddexerciseComponent } from './components/addexercise/addexercise.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { LeaderboardCardComponent } from './components/leaderboard-card/leaderboard-card.component';
import { LeaderboardService } from './services/leaderboard/leaderboard.service';
import { CustomExerciseComponent } from './components/custom-exercise/custom-exercise.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AddworkoutComponent } from './components/addworkout/addworkout.component';
import { WorkoutExerciseComponent } from './components/workout-exercise/workout-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    VaultComponent,
    LeaderboardComponent,
    LoginComponent,
    DiscoveryComponent,
    NavComponent,
    AddexerciseComponent,
    ExerciseComponent,
    WorkoutComponent,
    LeaderboardCardComponent,
    CustomExerciseComponent,
    AdduserComponent,
    AddworkoutComponent,
    WorkoutExerciseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [LeaderboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { DiscoveryComponent } from './components/discovery/discovery.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { VaultComponent } from './components/vault/vault.component';
import { LeaderboardCardComponent } from './components/leaderboard-card/leaderboard-card.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'discovery', component: DiscoveryComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'vault', component: VaultComponent },
  {path:'leaderboard-card',component: LeaderboardCardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { User, Workout } from 'src/app/classes/classes';
import { VaultService } from 'src/app/services/vault/vault.service';

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})
export class VaultComponent implements OnInit {

  private error = "lol didnt work";
  user: User = null;
  isLoaded: boolean = true;

  constructor(private VaultService: VaultService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.user = JSON.parse(document.cookie);
    // this.VaultService.getUser().subscribe(
    //   user => this.user = user,
    //   err => this.error = err
    // );
    this.isLoaded = true;
  }

}

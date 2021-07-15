import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/classes';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private error = "Login Page Error";
  user: User = null;



  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
  }

  getLogin() {
    this.LoginService.getLogin().subscribe(
      loggedInUser => this.user = loggedInUser,
      err => this.error = err
    );
    console.log(document.getElementById('username').value);
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/classes';
import { LoginService } from 'src/app/services/login/login.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  private error = "Login Page Error";
  user: User = null;



  constructor(
    private LoginService: LoginService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log("it gets here");
    console.log(this.loginForm.value);
    
    
    this.LoginService.getLogin().subscribe(
      loggedInUser => this.user = loggedInUser,
      err => this.error = err
    );
  }

  getLogin(event) {
    console.log(event.target);
    
    this.LoginService.getLogin().subscribe(
      loggedInUser => this.user = loggedInUser,
      err => this.error = err
    );
  }

}

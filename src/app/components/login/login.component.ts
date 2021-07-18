import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/classes/classes';
import { AdduserComponent } from '../adduser/adduser.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  reg: boolean = false;

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  private error = "Login Page Error";
  user: User = null;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    // Empty username
    if(this.loginForm.value.username == '') {
      alert('Please enter a username');
      document.getElementById('username').style.borderColor = 'red';
    }

    // Empty password
    if(this.loginForm.value.password == '') {
      alert('Please enter a password');
      document.getElementById('password').style.borderColor = 'red';
    }

    // potentially valid user
    else {
      this.httpClient.post('http://ec2-54-175-70-128.compute-1.amazonaws.com:8080/strictly/user-login', this.loginForm.value)
      .subscribe(
        response => {
          console.log(response);
          let jsonString = JSON.stringify(response);
          
          // Saving userdata as the ID of user
          // CHANGE IF NEEDED
          document.cookie = jsonString;
          console.log(document.cookie);

          this.router.navigate(['vault']);
        },
        error => { 
          alert('Incorrect login information!')
        });
    }
  }

  onClick() {
    if (!(this.reg)) {
      this.reg = true;
    } else {
      this.reg = false;
    }
  }

  changeReg(val: boolean) {
    this.reg = val;
  }

}

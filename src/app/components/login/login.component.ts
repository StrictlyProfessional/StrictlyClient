import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/classes/classes';
// import { LoginService } from 'src/app/services/login/login.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
    // private LoginService: LoginService,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log("it gets here");
    this.httpClient.post('http://ec2-3-87-255-246.compute-1.amazonaws.com:8080/strictly/user-login', this.loginForm.value)
      .subscribe(
        response => {
          console.log(response);
          let jsonString = JSON.stringify(response);
          

          // Saving userdata as the ID of user
          // CHANGE IF NEEDED
          document.cookie = jsonString;
          console.log(document.cookie);
          

          // To retrieve from cookie
          console.log('cookie retrieve ez: ' + this.getCookie('id'));

          /* Uses localStorage *yuck* *gross*
          // Saving user data as the id CHANGE IF NEEDED
          localStorage.setItem('loggedInUser', jsonString.id);

          // To retrieve the user data 
          let halp = localStorage.getItem('loggedInUser');
          console.log(halp);
          */

          this.router.navigate(['vault']);
        },
        error => { 
          alert('Incorrect login information!')
        });
    
    /*
    this.LoginService.getLogin().subscribe(
      loggedInUser => this.user = loggedInUser,
      err => this.error = err

    );*/
  }

  getCookie(cookieKey): string {
    let name = cookieKey + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  // getLogin(event) {
  //   console.log(event.target);
    
  //   this.LoginService.getLogin().subscribe(
  //     loggedInUser => this.user = loggedInUser,
  //     err => this.error = err
  //   );
  // }

}

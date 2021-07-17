import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  isShowing: boolean = false;

  registerForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  registerObject = {
    username: '',
    password: '',
    userLevel: 1
  };

  @Input() showReg: boolean;
  @Output() onReg: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onRegister() {
    // Empty username
    if(this.registerForm.value.username == '') {
      alert('Please enter a username');
      document.getElementById('username').style.borderColor = 'red';
    }
    
    // Empty password
    if(this.registerForm.value.password == '') {
      alert('Please enter a password');
      document.getElementById('password').style.borderColor = 'red';
    }

    else {
      this.registerObject.username = this.registerForm.value.username;
      this.registerObject.password = this.registerForm.value.password;
      this.httpClient.post('http://ec2-3-87-255-246.compute-1.amazonaws.com:8080/strictly/register', this.registerObject)
        .subscribe( 
          response => {
            console.log(response);
            alert('Registered new user: ' + this.registerForm.value.username);
            this.setReg();
          },
          error => {
            alert('Cannot register new user!');
          });
    }
  }

  setReg() {
    this.onReg.emit(false);
  }

}

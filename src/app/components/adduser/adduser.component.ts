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
    password: ''
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
    console.log("hello");
    this.registerObject.username = this.registerForm.value.username;
    this.registerObject.password = this.registerForm.value.password;
    this.httpClient.post('http://localhost:8080/strictly/register', this.registerObject)
      .subscribe( 
        response => {
          console.log(response);
        },
        error => {
          alert('Cannot register new user!');
        });
  }

  setReg() {
    this.onReg.emit(false);
  }

}

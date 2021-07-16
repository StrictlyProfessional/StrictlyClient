import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  isShowing: boolean = false;

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.isShowing) {
      this.isShowing = true;
    }
  }

}

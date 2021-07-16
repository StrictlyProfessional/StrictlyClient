import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';

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

  @Input() showReg: boolean;
  @Output() onReg: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onRegister() {
    console.log("hello");
  }

  setReg() {
    this.onReg.emit(false);
  }

  onSubmit() {
    
  }

}

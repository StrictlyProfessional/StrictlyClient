import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/classes/classes';
import { addCookie, grabUser } from 'src/app/functions/userFunc';

@Component({
  selector: 'app-edit-custom-exercise',
  templateUrl: './edit-custom-exercise.component.html',
  styleUrls: ['./edit-custom-exercise.component.css']
})
export class EditCustomExerciseComponent implements OnInit {

  user : User = grabUser();
  isShowing: boolean = false;

  custExerciseForm = this.formBuilder.group({
    name: '',
    desc: ''
  });

  custExerciseObject = {
    user : {
      id: this.user.id
    },
    name: '',
    description: '',
    id: 1
  };

  @Input() showEdit: boolean;
  @Output() onE: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onEdit() {
    console.log(this.custExerciseForm.value.name);
    console.log(this.custExerciseForm.value.desc);
    this.custExerciseObject.name = this.custExerciseForm.value.name;
    this.custExerciseObject.description = this.custExerciseForm.value.desc;
    //this.httpClient.post('http://ec2-54-175-70-128.compute-1.amazonaws.com:8080/strictly/customExercises/update', this.custExerciseObject)
    this.httpClient.post('http://localhost:8080/strictly/customExercises/update', this.custExerciseObject)
      .subscribe(
        response => {
          console.log('sent post');
          console.log(JSON.parse(document.cookie));
          console.log(response);
          alert('Edited Custom Exercise');
          this.setEdit();
        },
        error => {
          alert('Cannot edit custom exercise!');
        });
  }

  setEdit() {
    this.onE.emit(false);
  }
}

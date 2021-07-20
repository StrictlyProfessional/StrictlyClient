import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exercise, User } from 'src/app/classes/classes';
import { addCookie, grabUser } from 'src/app/functions/userFunc';
import { UserService } from 'src/app/services/user/user.service';

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
  @Input() custExercise;
  @Output() onE: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onEdit() {
    console.log(this.custExerciseForm.value.name);
    console.log(this.custExerciseForm.value.desc);
    this.custExerciseObject.name = this.custExerciseForm.value.name;
    this.custExerciseObject.description = this.custExerciseForm.value.desc;
    this.custExerciseObject.id = this.custExercise.id;
    this.httpClient.post('http://ec2-54-165-211-203.compute-1.amazonaws.com:8080/strictly/customExercises/update', this.custExerciseObject)
      .toPromise().then(
        data => {
          window.location.reload();
          alert('Edited custom exercise!');
        });
  }

  setEdit() {
    this.onE.emit(false);
  }
}

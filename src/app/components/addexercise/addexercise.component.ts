import { Component,Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { User } from 'src/app/classes/classes'
import { UserService } from 'src/app/services/user/user.service';
import { ExercisesService } from 'src/app/services/exercises/exercises.service'
import { grabUser, addCookie } from 'src/app/functions/userFunc';

@Component({
  selector: 'app-addexercise',
  templateUrl: './addexercise.component.html',
  styleUrls: ['./addexercise.component.css']
})
export class AddexerciseComponent implements OnInit {

  user : User = grabUser();
  newUser : User = null;
  // customExerciseForm : FormGroup;
  customExerciseForm = this.formBuilder.group({
    name: '',
    description: ''
  });
  customExerciseObject = {
    id: 0,
    name: '',
    description: '',
    completed: false,
    user: {
      id: this.user.id
    }
  }

@Input() showCustomExercise: boolean;
@Output() onCustomExercise: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private exercisesService: ExercisesService) { }

  ngOnInit(): void {

  }

  setCustomExercise() {
    console.log("This gets touched")
    this.onCustomExercise.emit(false);
  }

  onAdd(): void {
    this.customExerciseObject.name = this.customExerciseForm.value.name;
    this.customExerciseObject.description = this.customExerciseForm.value.description;
    this.exercisesService.add(this.customExerciseObject).subscribe(customExercise => this.customExerciseObject = customExercise);
    this.user.customExercises.push(this.customExerciseObject);
    addCookie(this.user);
    this.setCustomExercise();
    window.location.reload();
    alert("Custom Exercise added");
  }

  
}

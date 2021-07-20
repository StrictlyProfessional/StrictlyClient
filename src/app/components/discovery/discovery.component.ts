import { Component, OnInit } from '@angular/core';
import { Exercise, User } from 'src/app/classes/classes';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { UserService } from 'src/app/services/user/user.service';
import { addCookie, grabUser, getCustomExercises } from 'src/app/functions/userFunc';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css']
})
export class DiscoveryComponent implements OnInit {

  private error = "Error for Discovery Page";
  user = null;
  id: number;
  exercises: Exercise[];
  isLoaded: boolean = false;
  count: number = 0;
  customExercise: boolean = false;

  constructor(
    private ExercisesService: ExercisesService,
    private UserService: UserService
    ) { }

  ngOnInit(): void {
    this.id = grabUser().id;
    this.user = this.UserService.getById(this.id).subscribe(
      (data: User) => {
        this.user= data;
        this.user.customExercises = this.checkForCustomExercises(getCustomExercises(this.user.workouts));
    });
    this.getExercises();
  }


  getExercises() {
    this.ExercisesService.getExercies().subscribe(
      AllExercises => this.exercises = AllExercises,
      err => this.error = err
    );
    this.isLoaded = true;
    console.log(this.user)
  }

  onClick() {
    console.log("Let it work")
    if (!(this.customExercise)) {
      this.customExercise = true;
    } else {
      this.customExercise = false;
    }
  }

  changeCustomExercise(val: boolean) {
    this.customExercise = val;
  }

  // check to see if our array is empty (newly created custom exercises that arent put in a workout)
  checkForCustomExercises(arr) {
    this.user.customExercises.map(x => {
      if (!(arr.includes(x))) {
        arr.push(x);
      }
    })
    return arr;
  }


}

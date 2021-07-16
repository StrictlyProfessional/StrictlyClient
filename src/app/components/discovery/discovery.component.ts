import { Component, OnInit } from '@angular/core';
import { Exercise, User } from 'src/app/classes/classes';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css']
})
export class DiscoveryComponent implements OnInit {

  private error = "Error for Discovery Page";
  user: User;
  exercises: Exercise[];
  isLoaded: boolean = false;
  count: number = 0;

  constructor(private ExercisesService: ExercisesService) { }

  ngOnInit(): void {
    this.getUsersById()
    this.getExercises()
  }

  getUsersById() {
    // this.ExercisesService.getUsersById().subscribe(
    //   SpecificUsers => this.user = SpecificUsers,
    //   err => this.error = err
    // );
    // this.isLoaded = true;
    
    this.user = JSON.parse(document.cookie);
    this.isLoaded = true;
  }

  getExercises() {
    this.ExercisesService.getExercies().subscribe(
      AllExercises => this.exercises = AllExercises,
      err => this.error = err
    );
    this.isLoaded = true;
  }

}

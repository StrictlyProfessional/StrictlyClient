import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Workout } from 'src/app/classes/classes';

@Injectable({
  providedIn: 'root'
})
const workoutURL = 'http://ec2-3-87-255-246.compute-1.amazonaws.com:8080/strictly/workouts/';

export class WorkoutService {



  constructor(private http: HttpClient) { }

  // Get
  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(workoutURL);
  }
}

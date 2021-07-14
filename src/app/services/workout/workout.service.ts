import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Workout } from 'src/app/classes/classes';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private workoutURL = 'http://localhost:8080/strictly/workouts'

  constructor(private http: HttpClient) { }

  // Get
  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.workoutURL);
  }
}

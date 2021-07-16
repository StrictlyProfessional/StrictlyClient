import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Exercise, User } from 'src/app/classes/classes';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  
  private discoveryURL = 'http://localhost:8080/strictly/users/1'
  private discovery2URL = 'http://localhost:8080/strictly/exercises'

  constructor(private http: HttpClient) { }

  // Get
  getUsersById(): Observable<User> {
    return this.http.get<User>(this.discoveryURL);
  }

  getExercies(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.discovery2URL);
  }
}
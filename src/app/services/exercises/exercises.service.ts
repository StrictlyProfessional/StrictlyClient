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
  // private discoveryURL = 'http://ec2-54-175-70-128.compute-1.amazonaws.com:8080/strictly/users'
  private discovery2URL = 'http://ec2-54-175-70-128.compute-1.amazonaws.com:8080/strictly/exercises'

  constructor(private http: HttpClient) { }

  // Get
  getUsersById(): Observable<User> {
    return this.http.get<User>(this.discoveryURL);
  }

  getExercies(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.discovery2URL);
  }

  add(customExercise): Observable<any> {
    return this.http.post(`${this.discoveryURL}/add`, customExercise);
  }
}
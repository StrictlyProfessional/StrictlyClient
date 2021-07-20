import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Workout } from 'src/app/classes/classes';

const url = 'http://ec2-54-165-211-203.compute-1.amazonaws.com:8080/strictly/workouts';
// const url = 'http://localhost:8080/strictly/workouts';
@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  update(workout): Observable<any> {
    return this.http.post(`${url}/update`, workout);
  }

  add(workout): Observable<any> {
    return this.http.post(`${url}/add`, workout);
  }

  delete(workout) {
    return this.http.post<Workout>(`${url}/delete`, workout);
  }
}

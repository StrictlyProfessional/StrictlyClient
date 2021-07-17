import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/classes';

const userURL = 'http://ec2-3-87-255-246.compute-1.amazonaws.com:8080/strictly/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  update(user): Observable<any> {
    return this.http.post(userURL, user);
  }

  get(id): Observable<any> {
    return this.http.get(`${userURL}/${id}`);
  }

}

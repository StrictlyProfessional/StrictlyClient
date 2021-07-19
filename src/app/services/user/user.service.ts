import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/classes';

const userURL = 'http://ec2-54-175-70-128.compute-1.amazonaws.com:8080/strictly/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  update(user): Observable<any> {
    return this.http.post(userURL, user);
  }

  getById(id) {
    return this.http.get<User>(`${userURL}/${id}`);
  }

}

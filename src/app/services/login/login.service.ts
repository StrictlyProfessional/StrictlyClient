import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { User } from 'src/app/classes/classes';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginURL = 'http://localhost:8080/strictly/user-login'

  constructor(private http: HttpClient) { }

  // Get
  getLogin(): Observable<User> {
    return this.http.get<User>(this.loginURL);
  }
}

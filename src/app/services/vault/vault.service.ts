import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/classes/classes';

@Injectable({
  providedIn: 'root'
})
export class VaultService {

  private vaultURL = `http://ec2-3-87-255-246.compute-1.amazonaws.com:8080/StrictlyProToDo-0.0.1-SNAPSHOT/strictly/vault/${localStorage.getItem('loggedInUser')}`;

  constructor(private http: HttpClient) { }

  // get user
  getUser(): Observable<User> {
    let test = localStorage.getItem('loggedInUser');
    console.log('this is inside vault ' + test);
    return this.http.get<User>(this.vaultURL);
  }
}

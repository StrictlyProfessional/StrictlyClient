import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/classes/classes';

@Injectable({
  providedIn: 'root'
})
export class VaultService {

  private vaultURL = `http://ec2-3-87-255-246.compute-1.amazonaws.com:8080/strictly/vault/${this.getCookie('id')}`;

  constructor(private http: HttpClient) { }

  // get user
  getUser(): Observable<User> {
    console.log('this is inside vault ' + this.getCookie('id'));
    return this.http.get<User>(this.vaultURL);
  }

  getCookie(cookieKey): string {
    let name = cookieKey + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}

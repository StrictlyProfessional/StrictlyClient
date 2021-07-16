import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

const url = 'http://ec2-3-87-255-246.compute-1.amazonaws.com:8080/strictly/users/update';
export class UserService {

  constructor(private http: HttpClient) { }
  
  update(user): Observable<any> {
    return this.http.post(url, user);
  }

}

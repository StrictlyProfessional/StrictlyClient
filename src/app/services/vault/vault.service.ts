import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/classes/classes';

@Injectable({
  providedIn: 'root'
})
const vaultURL = `http://ec2-3-87-255-246.compute-1.amazonaws.com:8080/strictly/`;
export class VaultService {



  constructor(private http: HttpClient) { }


}

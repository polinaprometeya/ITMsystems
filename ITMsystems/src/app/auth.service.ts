import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, first, catchError } from 'rxjs';
import { User } from './models/User';
import { application } from 'express';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "xhttp://localhost:4200/auth/signup";
  
  httpOptions:{ headers: HttpHeaders} = {
  headers: new HttpHeaders({"Content-Type": "application/json"}),
};

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  // signup(user: Exclude<User, { kind: "id" }>): Observable<User>{
  //   return this.http
  //   .post<User>(this.url, user, this.httpOptions)
  //   .pipe(
  //     first(),
  //     catchError(this.errorHandlerService.handleError<User>("signup"))
  //   );
  // }

  signup(user: Omit<User, "id">): Observable<User>{
    return this.http
    .post<User>(this.url, user, this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("signup"))
    );
  }
}

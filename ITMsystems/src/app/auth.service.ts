import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, first, catchError, tap, BehaviorSubject } from 'rxjs';

import { User } from './models/User';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private url = "http://localhost:4200/auth/";
  isUserLoggedIn$ = new BehaviorSubject<Boolean>(false);
  userId: User["id"] | undefined;

  httpOptions:{ headers: HttpHeaders} = { 
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(
    private http: HttpClient, 
    private errorHandlerService: ErrorHandlerService, 
    private router: Router) { }


  signup(user: Omit<User, "id">): Observable<User>{
    return this.http
  .post<User>(`${this.url}/signup` , user, this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("signup"))
    );
  }



  login(email: User["email"], password: User["password"]): Observable<{token: string, userId: User["id"]}>{
    return this.http
    .post(`${this.url}/login` , {email, password}, this.httpOptions)
    .pipe(
      first(),
      tap((tokenObject: {token: string, userId: User["id"]}) => {
        this.userId =  tokenObject.userId;
        localStorage.setItem("token", tokenObject.token);
        this.isUserLoggedIn$.next(true);
        this.router.navigate(["post"]);

      }),
      catchError(this.errorHandlerService.handleError<{token: string, userId: User["id"]}>("login"))
    );
  }
}

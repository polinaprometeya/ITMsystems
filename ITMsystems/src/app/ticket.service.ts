import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, catchError, first} from 'rxjs';

import { User } from './models/User';
import { Ticket } from './models/Ticket';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private url = "http://localhost:4200/ticket/";

  httpOptions:{ headers: HttpHeaders} = { 
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(    
      private http: HttpClient, 
      private errorHandlerService: ErrorHandlerService, 
      private router: Router) { }


  fetchAll(): Observable<Ticket[]>{
  return this.http
        .get<Ticket[]>(this.url, {responseType: "json"})
          .pipe(
            catchError(this.errorHandlerService.handleError<Ticket[]>("fetchAll", []))
          );
  }

  createTicket(formData: Partial<Ticket>, userId: User["id"]): Observable<Ticket> {

    return this.http
    .post<Ticket>(this.url, {
      title: formData.title,  
      description: formData.description, 
      status: formData.status, 
      level: formData.level, 
      userId: userId}, this.httpOptions)
      .pipe(
        catchError(this.errorHandlerService.handleError<Ticket>("createTicket"))
      );
  }
  deleteTicket(ticketId: Ticket["id"]): Observable<{}>{
    return this.http
        .delete<Ticket>( `${this.url}/${ticketId}` , this.httpOptions).pipe(
          first(),
          catchError(this.errorHandlerService.handleError<Ticket>("deleteTicket"))
        );
    }

}

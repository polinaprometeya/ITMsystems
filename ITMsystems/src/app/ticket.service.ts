import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, catchError} from 'rxjs';

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
}

import { Component, OnInit } from '@angular/core';

import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Observable, catchError} from 'rxjs';

import { TicketService } from '../ticket.service';
import { AuthService } from '../auth.service';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';
import { User } from '../models/User';
import { Ticket } from '../models/Ticket';
@Component({
  selector: 'app-ticket',
  imports: [CreateTicketComponent,MatCardModule, MatIconModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit{
[x: string]: any;
  ticket$: Observable<Ticket[]> | undefined; //the $ means observable variable
  userId: User["id"] | undefined; 

  constructor(private ticketService: TicketService, private authService: AuthService){}

  ngOnInit(): void {
    this.ticket$ = this.fetchAll();
    this.userId = this.authService.userId;
  }

  fetchAll(): Observable<Ticket[]>{
    return this.ticketService.fetchAll();
  }

  createTicket(): void {
    this.ticket$ = this.fetchAll();
    console.log("printed from parent component")
  }

  deleteTicket(ticketId: Ticket["id"]): void {
    this.ticketService.deleteTicket(ticketId).subscribe(()=> (this.ticket$ = this.fetchAll()))
  }
  
}

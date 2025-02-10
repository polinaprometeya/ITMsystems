import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Observable, catchError, filter, of} from 'rxjs';

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

  ticket$: Observable<Ticket[]> | undefined; //the $ means observable variable
  userId: User["id"] | undefined; 
  filterLevel: number | null = null;
  statuses: string[] = ['New', 'In Progress', 'Done'];

  // public iterableTickets = (ticket$: Observable<Ticket['id']>): Ticket[] => of(ticket$.id);

  constructor(private ticketService: TicketService, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.ticket$ = this.fetchAll();
    this.userId = this.authService.userId;
    console.log('ticket', this.ticket$ )
  }
  
  fetchAll(): Observable<Ticket[]>{
    return this.ticketService.fetchAll();
  }

  createTicket(): void {
    debugger;
    this.ticket$ = this.fetchAll();
    console.log("printed from parent component")
  }

  deleteTicket(ticketId: Ticket["id"]): void {
    debugger;
    this.ticketService.deleteTicket(ticketId).subscribe(()=> (this.ticket$ = this.fetchAll()))
  }
  
    // get filteredTickets(): Ticket[] {
    //   // if(this.tickets.filter(ticket => ticket.level != this.filterLevel)){"No tickets at this escalation level"};
    //   return this.filterLevel !== null ? this.ticket$.filter(ticket => ticket.level === this.filterLevel) : this.ticket$;
    // }

    //  filteredStatus(status: string): Ticket[] {
    //  return this.ticket$.filter(ticket => ticket.status === status && (this.filterLevel === null || ticket.level === this.filterLevel));
    // }
  
    // hasTickets(status: string): boolean {
    //   if(this.filteredTickets.some(ticket => ticket.status === status))
    //     {return true }
    //   else return false;
    // }
  
    onTicketClick(): void {
      alert("Ticket editing and detailed view of single ticket coming soon")
      this.router.navigate(["ticket"]);
    }
  
}



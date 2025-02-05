import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTicketComponent } from '../create-ticket/create-ticket.component';
// import * as mockData from '../../public/mockData.json';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import  {Ticket} from '../models/Ticket';


@Component({
  selector: 'app-help-desk',
  standalone: true,
  imports: [CommonModule, CreateTicketComponent,MatCardModule, MatIconModule], 
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})

export class HelpDeskComponent {

  //data -- that should come from backend
  tickets: Ticket[] = [
    { id: 8, title: 'Issue with login',  description:'ksadfaskfd', status: 'New', level: 1, userId: 2,  timestamp: '2024-01-27 09:02:00'},
    { id: 9, title: 'Server downtime', description:'ksadfaskfd', status: 'In Progress',  level: 3, userId: 2 ,  timestamp: "2024-01-28 10:20:00"},
    { id: 10, title: 'Email not working',  description:'ksadfaskfd', status: 'Done',   level: 2,  userId: 1, timestamp: "2024-01-29 09:30:00" },
    { id: 11, title: 'Email not working', description:'kskfd', status: 'In Progress',  level: 2, userId: 6, timestamp: "2024-01-29 10:11:00"},
    
  ];

  filterLevel: number | null = null;
  statuses: string[] = ['New', 'In Progress', 'Done'];

  //✅Filters tickets based on the selected level.
  get filteredTickets(): Ticket[] {
    // if(this.tickets.filter(ticket => ticket.level != this.filterLevel)){"No tickets at this escalation level"};
    return this.filterLevel !== null ? this.tickets.filter(ticket => ticket.level === this.filterLevel) : this.tickets;
  }

  //  filterTickets(level: number | null) {
  //   this.selectedLevel = level;
  //   this.filteredTickets = level ? this.tickets.filter(t => t.level === level) : [...this.tickets];
  // }

  //✅Filters tickets based on the selected level and status.
   filteredStatus(status: string): Ticket[] {
   return this.tickets.filter(ticket => ticket.status === status && (this.filterLevel === null || ticket.level === this.filterLevel));
  }


  //✅Checks if there are any tickets in the given status.
  hasTickets(status: string): boolean {
    if(this.filteredTickets.some(ticket => ticket.status === status))
      {return true }
    else return false;
  }

  onTicketClick(): void {
    alert("Ticket editing and detailed view of single ticket coming soon")
  }
}

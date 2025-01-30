import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import * as mockData from '../../public/mockData.json';

interface Ticket {
  id: number;
  title: string;
  status: 'New' | 'In Progress' | 'Done';
  description: string;
  timestamp: string;
  level: 1 | 2 | 3;
}

@Component({
  selector: 'app-help-desk',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})

export class HelpDeskComponent {
  tickets: Ticket[] = [
    { id: 7, title: 'Issue with login', status: 'New',  description:'ksadfaskfd', timestamp: '2024-01-27 09:02:00', level: 1 },
    { id: 8, title: 'Server downtime', status: 'In Progress',  description:'ksadfaskfd', timestamp: "2024-01-28 10:20:00", level: 3 },
    { id: 9, title: 'Email not working', status: 'Done',  description:'ksadfaskfd', timestamp: "2024-01-29 09:30:00", level: 2 },
  ];

  filterLevel: number | null = null;

  //✅Filters tickets based on the selected level.
  get filteredTickets(): Ticket[] {
    return this.filterLevel !== null ? this.tickets.filter(ticket => ticket.level === this.filterLevel) : this.tickets;
  }

  //✅Checks if there are any tickets in the given status.
  hasTickets(status: string): boolean {
    return this.filteredTickets.some(ticket => ticket.status === status);
  }
}

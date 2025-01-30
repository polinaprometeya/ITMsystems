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

  //data -- that should come from backend
  tickets: Ticket[] = [
    { id: 7, title: 'Issue with login', status: 'New',  description:'ksadfaskfd', timestamp: '2024-01-27 09:02:00', level: 1 },
    { id: 8, title: 'Server downtime', status: 'In Progress',  description:'ksadfaskfd', timestamp: "2024-01-28 10:20:00", level: 3 },
    { id: 9, title: 'Email not working', status: 'Done',  description:'ksadfaskfd', timestamp: "2024-01-29 09:30:00", level: 2 },
    { id: 10, title: 'Email not working', status: 'In Progress',  description:'kskfd', timestamp: "2024-01-29 10:11:00", level: 2 },
  ];

  filterLevel: number | null = null;
  statuses: string[] = ['New', 'In Progress', 'Done'];

  //✅Filters tickets based on the selected level.
  get filteredTickets(): Ticket[] {
    // if(this.tickets.filter(ticket => ticket.level != this.filterLevel)){"No tickets at this escalation level"};
    return this.filterLevel !== null ? this.tickets.filter(ticket => ticket.level === this.filterLevel) : this.tickets;
  }

  //✅Filters tickets based on the selected level and status.
   filteredStatus(status: string): Ticket[] {
   return this.tickets.filter(ticket => ticket.status === status && (this.filterLevel === null || ticket.level === this.filterLevel));
  }

  //  filterTickets(level: number | null) {
  //   this.selectedLevel = level;
  //   this.filteredTickets = level ? this.tickets.filter(t => t.level === level) : [...this.tickets];
  // }

  //✅Checks if there are any tickets in the given status.
  hasTickets(status: string): boolean {
    if(this.filteredTickets.some(ticket => ticket.status === status))
      {return true }
    else return false;
  }
}

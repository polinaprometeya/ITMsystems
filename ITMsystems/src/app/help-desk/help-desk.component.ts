import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import * From

interface Ticket {
  id: number;
  title: string;
  status: 'New' | 'In Progress' | 'Done';
  timestamp: string;
  level: 1 | 2 | 3;
}

@Component({
  selector: 'app-help-desk',
  standalone: true, // ✅ Standalone Component
  imports: [CommonModule], // ✅ Required for *ngFor, *ngIf
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})

export class HelpDeskComponent {
  tickets: Ticket[] = [
    { id: 7, title: 'Issue with login', status: 'New', timestamp: '2024-01-29T09:00:00Z', level: 1 },
    { id: 8, title: 'Server downtime', status: 'In Progress', timestamp: "2024-01-29T10:30:00Z", level: 3 },
    { id: 9, title: 'Email not working', status: 'Done', timestamp: "2024-01-28T15:45:00Z", level: 2 },
  ];

  filterLevel: number | null = null;

  /**
   * Filters tickets based on the selected level.
   */
  get filteredTickets(): Ticket[] {
    return this.filterLevel !== null ? this.tickets.filter(ticket => ticket.level === this.filterLevel) : this.tickets;
  }

  /**
   * Checks if there are any tickets in the given status.
   */
  hasTickets(status: string): boolean {
    return this.filteredTickets.some(ticket => ticket.status === status);
  }
}

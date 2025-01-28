import { Component } from '@angular/core';

interface Ticket {
  id: number;
  title: string;
  status: string;
  level: number;
}

@Component({
  selector: 'app-help-desk',
  imports: [],
  templateUrl: './help-desk.component.html',
  styleUrl: './help-desk.component.css'
})

export class HelpDeskComponent {
  tickets: Ticket[] = [
    { id: 1, title: 'Issue with login', status: 'New', level: 1 },
    { id: 2, title: 'Payment failure', status: 'In Progress', level: 2 },
    { id: 3, title: 'Bug in report generation', status: 'Done', level: 3 },
  ];

  filteredTickets: Ticket[] = [...this.tickets];
  selectedLevel: number | null = null;

  filterTickets(level: number | null) {
    this.selectedLevel = level;
    this.filteredTickets = level ? this.tickets.filter(t => t.level === level) : [...this.tickets];
  }
}

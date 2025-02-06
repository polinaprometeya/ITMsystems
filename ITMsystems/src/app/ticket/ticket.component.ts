import { Component } from '@angular/core';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-ticket',
  imports: [CreateTicketComponent,MatCardModule, MatIconModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  createTicket(): void {
    console.log("printed from parent component")
  };
}

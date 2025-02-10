import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';

import { ReactiveFormsModule, FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { AuthService } from '../auth.service';
import { TicketService } from '../ticket.service';

import{Ticket} from '../models/Ticket';
import { first } from 'rxjs';

interface dropDown {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-ticket',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.css'
})

export class CreateTicketComponent  implements OnInit{
  @ViewChild("formDirective") formDirective: NgForm | undefined;
  @Output() create: EventEmitter<any> = new EventEmitter();

  ticketForm = new FormGroup('');
  isOpen = false;

  constructor(
    private ticketService: TicketService, private authService: AuthService
  ){}
  
    ngOnInit(): void {
      this.ticketForm = this.createFormGroup();
    }

    // statuses: dropDown[] = [
    //   {value: 'new-0', viewValue: 'New'},
    //   {value: 'inprogress-1', viewValue: 'In Progress'},
    //   {value: 'done-2', viewValue: 'Done'},
    // ];

    // levels: dropDown[] = [
    //   {value: '1-0', viewValue: 'Level 1'},
    //   {value: '2-1', viewValue: 'Level 2'},
    //   {value: '3-2', viewValue: 'Level 3'},
    // ];
  
    createFormGroup():FormGroup{
        return new FormGroup
        ({
          title: new FormControl("", [Validators.required, Validators.minLength(5)]),
          description: new FormControl("", [Validators.required, Validators.minLength(5)]),
          status: new FormControl("", [Validators.required]),
          level: new FormControl("", [Validators.required]),
        })
    }
  
    // postTicket(formData: Ticket["title"] | Ticket["description"] | Ticket["status"] | Ticket["level"]): void {
    //   if(formData){console.log(formData);}
    //   this.ticketService.createTicket(formData, this.authService.userId).pipe(first())
    //   .subscribe(()=>this.create.emit(null))
      
    //   this.ticketForm.reset();
    //   this.formDirective.resetForm()
    // }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { ReactiveFormsModule, FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import{Ticket} from '../models/Ticket';


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
  ticketForm = new FormGroup('');
  constructor(){}
  
    ngOnInit(): void {
      this.ticketForm = this.createFormGroup();
    }

    statuses: dropDown[] = [
      {value: 'new-0', viewValue: 'New'},
      {value: 'inprogress-1', viewValue: 'In Progress'},
      {value: 'done-2', viewValue: 'Done'},
    ];

    levels: dropDown[] = [
      {value: '1-0', viewValue: 'Level 1'},
      {value: '2-1', viewValue: 'Level 2'},
      {value: '3-2', viewValue: 'Level 3'},
    ];
  
    createFormGroup():FormGroup{
        return new FormGroup
        ({
          title: new FormControl("", [Validators.required, Validators.minLength(5)]),
          description: new FormControl("", [Validators.required, Validators.minLength(5)]),
          status: new FormControl("", [Validators.required]),
          level: new FormControl("", [Validators.required]),
        })
    }
  
    postTicket(formData: Pick<Ticket, "title"|"description"|"status"|"level">): void {
      if(formData){console.log(formData);}
      this.ticketForm.reset();
      this.formDirective.resetForm()
    }

}

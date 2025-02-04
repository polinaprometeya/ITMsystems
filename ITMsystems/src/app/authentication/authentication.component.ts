import { Component, OnInit } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';

import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-authentication',
  imports: [
    // RouterLink,
    // RouterOutlet,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],

  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnInit{
  signupForm = new FormGroup('');

  constructor(){}

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }

  createFormGroup():FormGroup{
      return new FormGroup
      ({
        name: new FormControl("", [Validators.required, Validators.minLength(2)]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(7)]),

      })
  }

  signup(): void{
    if(this.signupForm){console.log(this.signupForm.value);}
  }
}
import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

import { AuthService } from '../auth.service';
import { User } from '../models/User';

@Component({
  selector: 'app-authentication',
  imports: [

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],

  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnInit{
  signupForm = new FormGroup('');

  constructor(private authService: AuthService){}

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

    this.authService
      .signup(this.signupForm.value)
      .subscribe((msg)=>console.log(msg));
  }
}
import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule,MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup('');

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup():FormGroup{
      return new FormGroup
      ({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(7)]),
      })
  }

  login(): void {
    if(this.loginForm){console.log(this.loginForm.value);}

    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe();
  }

}

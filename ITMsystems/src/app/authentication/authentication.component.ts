import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

// import * as sql from 'mssql';

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

// const config: sql.config = {
//   server: '**',
//   database: '**',
//   user: '**',
//   password: '**',
//   options: {
//     encrypt: true, // Enable encryption if needed
//   },
// }

// async function connectToDatabase() {
//   try {
//     await sql.connect(config);
//     console.log('Connected to the database successfully!');
//     // Perform database operations here
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//   }
// }
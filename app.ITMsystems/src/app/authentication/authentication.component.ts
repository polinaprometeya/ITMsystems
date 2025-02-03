import { Component } from '@angular/core';
// import * as sql from 'mssql';

@Component({
  selector: 'app-authentication',
  imports: [],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

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
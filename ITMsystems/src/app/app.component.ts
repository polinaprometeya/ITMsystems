import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import{ MatListModule} from '@angular/material/list';

import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  imports: 
  [
    RouterOutlet, 

    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,

    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ITMsystems';
   // title!: string | undefined;
  
}



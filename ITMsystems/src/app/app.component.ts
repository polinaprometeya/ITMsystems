import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HelpDeskComponent } from './help-desk/help-desk.component';
import { HeaderComponent } from './header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import{ MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-root',
  imports: 
  [
    RouterOutlet, 

    HelpDeskComponent, 
    HeaderComponent,
   

    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ITMsystems';
   // title!: string | undefined;
  
}



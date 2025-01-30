import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelpDeskComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ITMsystems';
}



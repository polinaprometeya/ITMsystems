import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelpDeskComponent } from './help-desk/help-desk.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelpDeskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ITMsystems';
}



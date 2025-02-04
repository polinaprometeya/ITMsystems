import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'ITMsystems';
//  @input() title: string | undefined = 'ITMsystems';
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import{ MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'ITMsystems';
//  @input() title: string | undefined = 'ITMsystems';
}

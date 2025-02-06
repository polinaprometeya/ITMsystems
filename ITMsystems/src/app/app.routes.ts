import { Routes } from '@angular/router';

import { FAQComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { TicketComponent } from './ticket/ticket.component';

export const routes: Routes = 
[
{path: '',component: HelpDeskComponent},
{path: 'Home',component: CreateTicketComponent},
{path: 'Create Ticket',component: HelpDeskComponent},
{path: 'FAQ', component: FAQComponent},
{path: 'Login',component: LoginComponent},
{path: 'Signup',component: AuthenticationComponent},
{path: 'Ticket',component: TicketComponent},
{path: '**', redirectTo: ''}
];

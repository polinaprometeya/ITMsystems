import { Routes } from '@angular/router';

import { FAQComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';

export const routes: Routes = 
[
{path: '',component: HelpDeskComponent},
{path: 'Home',component: HelpDeskComponent},
{path: 'FAQ', component: FAQComponent},
{path: 'Login',component: LoginComponent},
{path: 'Signup',component: AuthenticationComponent},
{path: '**', redirectTo: ''}
];

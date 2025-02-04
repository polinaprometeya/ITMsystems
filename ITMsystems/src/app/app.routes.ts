import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FAQComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';

export const routes: Routes = 
[
{path: '',component: AppComponent},
{path: 'faq', component: FAQComponent},
{path: 'Login',component: LoginComponent},
{path: 'Signup',component: AuthenticationComponent},
{path: '**', redirectTo: ''}
];

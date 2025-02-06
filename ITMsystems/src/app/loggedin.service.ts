import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinService implements CanActivate {

  constructor( private authService: AuthService, private router: Router, ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    throw new Error('Error.');
  }

  // canActivate(): Observable<Boolean>{
  //   if(!this.authService.isUserLoggedIn$.value )
  //   {
  //     this.router.navigate(["signup"]);
  //   }
  //   return this.authService.isUserLoggedIn$;
  // }
}

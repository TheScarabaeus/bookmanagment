import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

/**
 * Guard that prevents users from navigating to pages that need authentication.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  /**
   * Checks if the user is logged in. It they are not logged in, they will be navigated to login
   */
  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    if (this.authService.hasValidToken) return true;
    else {
      this.router.navigate(['login']);
    }
  }
}

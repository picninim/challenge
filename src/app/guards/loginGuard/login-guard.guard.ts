import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }
  canActivate(): boolean {
    const user = this.authService.user;
    if (!user) {
      this.router.navigate(['login'], {relativeTo: this.activatedRoute.root});
      console.warn('Redirect from LoginGuardGuard');
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuardGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }
  canActivate(): boolean {
    const user = this.authService.user;
    if (user) {
      this.router.navigate(['albums'], {relativeTo: this.activatedRoute.root});
      console.warn('Redirect from LogoutGuardGuard');
      return false;
    }
    return true;
  }
}

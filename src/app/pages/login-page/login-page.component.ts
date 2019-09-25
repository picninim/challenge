import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { CLIENT_ID, SPOTIFY_ACCOUNTS_API } from 'src/app/api/spotify-api.service';
import { environment } from 'src/environments/environment';
import { IUserToken } from 'src/app/models/user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  private redirectToSpotify() {
    const param = new HttpParams()
    .set('client_id', CLIENT_ID)
    .set('response_type', 'token')
    .set('redirect_uri', environment.domain + 'login')
    .set('scope', 'user-read-private user-read-email');
    window.location.href = `${SPOTIFY_ACCOUNTS_API}authorize?${param.toString()}`;
  }

  private async login(code: IUserToken) {
    await this.authService.login(code);
    this.router.navigate(['albums'], {relativeTo:  this.activatedRoute.root});
  }

  ngOnInit() {
    this.activatedRoute.fragment.pipe(
      map(fragment => new URLSearchParams(fragment)),
      map((params) => (
        {
          access_token: params.get('access_token'),
          token_type: params.get('token_type'),
          expires_in: params.get('expires_in'),
          state: params.get('state')
        }))
    ).subscribe( e => {
      e.access_token ? this.login(e) : this.redirectToSpotify();
    });
  }

}

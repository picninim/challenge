import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { SPOTIFY_API } from 'src/app/api/spotify-api.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyTokenInterceptService {

  constructor(
    private authService: AuthService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authorization = request.headers.get('Authorization');
    // if (request.url.includes(SPOTIFY_API)) {
    //   authorization = authorization || `Basic ${APP_TOKEN}`;
    // } else
    if (request.url.includes(SPOTIFY_API)) {
      authorization = authorization || `Bearer ${this.authService.user.token.access_token}`;
    }
    request = request.clone({
      headers: request.headers.set('Authorization', authorization)
    });

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
  }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
            reason: error && error.error.reason ? error.error.reason : '',
            status: error.status
        };
        if (error.status === 401 || error.status === 403) {
            this.authService.logout();
        }
        return throwError(error);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { User, IUserToken } from 'src/app/models/user.model';
import { SpotifyAPIService } from 'src/app/api/spotify-api.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { VisitedAlbumsService } from '../visitedAlbums/visited-albums.service';

const USER = 'user';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private spotifyAPIService: SpotifyAPIService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private visitedAlbumsService: VisitedAlbumsService
  ) { }

  public get user() {
    return JSON.parse(localStorage.getItem(USER));
  }

  public set user(user: User) {
    localStorage.setItem(USER, JSON.stringify(user));
  }

  public logout() {
    localStorage.removeItem(USER);
    this.visitedAlbumsService.removeAll();
    this.router.navigate(['login'], {relativeTo: this.activatedRoute.root});

  }

  public async login(token: IUserToken) {
    try {
      const userInfo = await this.spotifyAPIService.getUser(token.access_token).toPromise();
      this.user = { ...userInfo, token};
    } catch (err) {
      throw err;
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUserToken, User } from '../models/user.model';
import { IPage, ISearch } from '../models/common.model';
import { Album } from '../models/album.model';
import { SimpleTrack } from '../models/track.model';

export const CLIENT_ID = 'e5cff53a9cf14ddaa5e58deb49bb7d21';
export const SECRET_ID = 'b83d5959f5e446a991b7d3e773d23798';
export const APP_TOKEN = btoa(CLIENT_ID + ':' + SECRET_ID);
export const SPOTIFY_ACCOUNTS_API = 'https://accounts.spotify.com/';
export const SPOTIFY_API = 'https://api.spotify.com/v1/';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAPIService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUser(token: string): Observable<User> {
    return this.httpClient.get(SPOTIFY_API + 'me/', {
      headers: {Authorization: `Bearer ${token}`}
    }) as Observable<User>;
  }

  public getTracks(id: string) {
    return this.httpClient.get(SPOTIFY_API + 'albums/' + id + '/tracks') as Observable<IPage<SimpleTrack>>;
  }

  public getAlbum(id: string) {
    return this.httpClient.get(SPOTIFY_API + 'albums/' + id) as Observable<SimpleTrack>;
  }

  public search<T>(params: ISearch) {
    return this.httpClient.get(SPOTIFY_API + 'search/', {
      params: {
        q: params.q,
        type: params.type,
        offset: params.offset.toString()
      }
    }) as Observable<{
      [ type: string]: IPage<T>;
    }>;
  }
}

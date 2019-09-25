import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

import { SpotifyAPIService } from 'src/app/api/spotify-api.service';
import { VisitedAlbumsService } from 'src/app/services/visitedAlbums/visited-albums.service';
import { SimpleTrack } from 'src/app/models/track.model';
import { map } from 'rxjs/operators';
import { IPage } from 'src/app/models/common.model';

@Injectable({
  providedIn: 'root'
})
export class TracksResolverGuard implements Resolve<Promise<SimpleTrack[]> | SimpleTrack[]> {
  constructor(
    private spotifyAPIService: SpotifyAPIService,
  ) {
  }
  async resolve(
    route: ActivatedRouteSnapshot
  ) {
    return this.spotifyAPIService.getTracks(route.params.id).pipe()
      .toPromise().catch( () => {
      return null;
    });
  }
}


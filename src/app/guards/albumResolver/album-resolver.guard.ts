import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { SpotifyAPIService } from 'src/app/api/spotify-api.service';
import { VisitedAlbumsService } from 'src/app/services/visitedAlbums/visited-albums.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumResolverGuard implements Resolve<Promise<Album> | Album> {
  constructor(
    private spotifyAPIService: SpotifyAPIService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private visitedAlbumsService: VisitedAlbumsService
  ) {
  }
  async resolve(
    route: ActivatedRouteSnapshot
  ) {
    const foundAlbum = this.visitedAlbumsService.findAlbumById(route.params.id);
    if (foundAlbum) {
      return foundAlbum;
    }
    return this.spotifyAPIService.getAlbum(route.params.id).toPromise().catch( () => {
      this.router.navigate(['albums'], {relativeTo: this.activatedRoute.root});
      return null;
    });
  }
}


import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISearch } from 'src/app/models/common.model';
import { SpotifyAPIService } from 'src/app/api/spotify-api.service';
import { Subscription } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { VisitedAlbumsService } from 'src/app/services/visitedAlbums/visited-albums.service';

const INIT_FILTER: ISearch = {
  q: '',
  offset: 0,
  type: 'album',
};


@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit, OnDestroy {

  constructor(
    private spotifyAPIService: SpotifyAPIService,
    // private visitedAlbumsService: VisitedAlbumsService
  ) { }

  public filter = Object.assign({}, INIT_FILTER);
  public requestSub: Subscription = null;
  public albums: Album[] = [];

  private cancelRequest() {
    this.requestSub && this.requestSub.unsubscribe();
  }

  public handleChange($event) {
    this.filter.q = $event;
    this.albums = [];
    this.filter.q ? this.request() : this.resetFilter();
  }

  public handleScroll($event) {
    this.filter.q && this.requestSub.closed && this.request();
  }

  private async request() {
    this.cancelRequest();
    this.requestSub = this.spotifyAPIService.search<Album>(this.filter).subscribe( page => {
      this.filter.offset = this.filter.offset + 20;
      this.albums = this.albums.concat(page.albums.items);
    });

  }

  private resetFilter() {
    this.filter =  Object.assign({}, INIT_FILTER);
  }

  public get loading() {
    return this.requestSub && !this.requestSub.closed;
  }


  ngOnInit() {
  //  console.log(this.visitedAlbumsService.get());
  }

  ngOnDestroy() {
    this.cancelRequest();
  }

}

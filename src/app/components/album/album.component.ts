import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line: no-input-rename
  @Input()
  public album: Album;

  public get artists() {
    return this.album.artists.map( e => e.name).join(' / ');
  }

  public get albumCover() {
    return this.album.images && this.album.images[0] ? this.album.images[0].url : null;
  }

  ngOnInit() {
  }

}

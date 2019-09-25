import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisitedAlbumsService } from 'src/app/services/visitedAlbums/visited-albums.service';
import { Album } from 'src/app/models/album.model';
import { SimpleTrack } from 'src/app/models/track.model';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private visitedAlbumsService: VisitedAlbumsService
  ) {
  }

  public album: Album;
  public tracks: SimpleTrack[];

  ngOnInit() {
    this.album = this.activatedRoute.snapshot.data.album;
    this.tracks = this.activatedRoute.snapshot.data.tracks.items || [];
    this.visitedAlbumsService.add(this.album);
  }

}

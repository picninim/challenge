import { Component, OnInit } from '@angular/core';
import { VisitedAlbumsService } from 'src/app/services/visitedAlbums/visited-albums.service';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-recent-albums',
  templateUrl: './recent-albums.component.html',
  styleUrls: ['./recent-albums.component.scss']
})
export class RecentAlbumsComponent implements OnInit {

  constructor(
     private visitedAlbumsService: VisitedAlbumsService
  ) { }

  public albums: Album[] = this.visitedAlbumsService.get();

  ngOnInit() {
    this.visitedAlbumsService.onChange.subscribe( e => {
     this.albums = e;
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-albums-results',
  templateUrl: './albums-results.component.html',
  styleUrls: ['./albums-results.component.scss']
})
export class AlbumsResultsComponent implements OnInit {

  @Input()
  public albums: Album[] = [];

  @Input()
  public search: string = null;

  constructor() { }

  ngOnInit() {
  }

}

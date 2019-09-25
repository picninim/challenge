import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import { Album } from 'src/app/models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  animations: [
    trigger('albumInAlbums', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AlbumsComponent implements OnInit {

  constructor() {
  }

  @Input()
  public albums: Album[] = [];

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { SimpleTrack } from 'src/app/models/track.model';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  @Input()
  track: SimpleTrack;

  constructor() { }

  ngOnInit() {
  }

}

import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from 'src/app/models/album.model';

class SetAlbum extends Album {
 public timeAdded: number;
}

@Injectable({
  providedIn: 'root'
})
export class VisitedAlbumsService {

  constructor() {
    this.visitedAlbums.subscribe(
      e => {
        this.onChange.emit(e);
        localStorage.setItem('visitedAlbums', JSON.stringify(e));
      }

    );
  }

  public onChange = new EventEmitter<Album[]>();

  private visitedAlbums = new BehaviorSubject<SetAlbum[]>(JSON.parse(localStorage.getItem('visitedAlbums')) || []);

  private updateTime(album: Album | SetAlbum): SetAlbum {
    const setAlbum = Object.assign(album, { timeAdded: new Date().getTime()});
    return setAlbum;
  }

  public get(): SetAlbum[] {
    return Array.from(this.visitedAlbums.getValue()).sort( (a, b) => b.timeAdded - a.timeAdded);
  }

  public add(album: Album) {
    const wasUpdated  = this.update(album);
    if (!wasUpdated) {
      const albums = this.get();
      albums.unshift(this.updateTime(album));
      if (albums.length > 10) {
        albums.pop();
      }
      this.visitedAlbums.next(albums);
    }
  }

  public update(album: Album): Album {
    let existingAlbum  = this.findAlbum(album);
    if ( existingAlbum ) {
      const albums = this.get();
      const index = albums.indexOf(existingAlbum);
      existingAlbum = this.updateTime(existingAlbum);
      albums.splice(index, 1, existingAlbum);
      this.visitedAlbums.next(albums);
      return existingAlbum;
    }
  }

  public remove(album: Album) {
    const existingAlbum = this.findAlbum(album);
    if (existingAlbum) {
      const albums = this.get();
      const index = albums.indexOf(existingAlbum);
      albums.splice(index, 1);
    }
  }

  public findAlbum(album: Album): SetAlbum {
    return this.get().find( albumToEval => albumToEval.id === album.id);
  }

  public findAlbumById(id: string): SetAlbum {
    return this.get().find( albumToEval => albumToEval.id === id);
  }

  public removeAll() {
    this.visitedAlbums.next([]);
  }

}

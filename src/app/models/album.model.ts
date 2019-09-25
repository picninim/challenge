import { IImage, IPage, ISimple } from './common.model';
import { SimpleTrack } from './track.model';

// tslint:disable: variable-name

export class Album {
  public album_type = '';
  public artists: ISimple[] = [];
  public available_markets: string[] = [];
  public copyrights = [];
  public external_ids = {};
  public external_urls = [];
  public genres: string[] = [];
  public href = '';
  public id = '';
  public images: IImage[] = [];
  public label: string;
  public name: string;
  public popularity: number;
  public release_date: string;
  public release_date_precision: string;
  public tracks: IPage<SimpleTrack>;
  public type = 'album';
  public uri: string;
}

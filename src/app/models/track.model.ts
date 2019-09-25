// tslint:disable: variable-name
import { ISimple } from './common.model';

export class SimpleTrack implements ISimple {
  public artists: ISimple[] = [];
  public available_markets: string[] = [];
  public disc_number: number = null;
  public duration_ms: number = null;
  public explicit = false;
  public external_urls = {};
  public href = '';
  public id = '';
  public name = '';
  public preview_url = '';
  public track_number = null;
  public type = 'track';
  public uri = '';
}

import { IImage } from './common.model';

export interface IUserToken  {
  access_token: string;
  token_type: string;
  expires_in: string;
  state: string;
}

export class User {
  // tslint:disable-next-line: variable-name
  public display_name = '';
  public email = '';
  public href = '';
  public id = '';
  public images: IImage[] = [];
  public product = '';
  public type = '';
  public uri = '';
  public token: IUserToken = null;
}

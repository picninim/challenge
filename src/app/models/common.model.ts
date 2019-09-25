export interface ISimple {
  external_urls: {};
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface IImage {
  width?: number;
  height?: number;
  url: string;
}

export interface IPage<T> {
  href: string;
  items: T[];
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
}

export interface ISearch {
  q: string;
  type: string;
  offset: number;
}

import { TestBed } from '@angular/core/testing';

import { SpotifyTokenInterceptService } from './spotify-token-intercept-service';

describe('TokenHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyTokenInterceptService = TestBed.get(SpotifyTokenInterceptService);
    expect(service).toBeTruthy();
  });
});

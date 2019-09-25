import { TestBed, async, inject } from '@angular/core/testing';

import { AlbumResolverGuard } from './album-resolver.guard';

describe('AlbumResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumResolverGuard]
    });
  });

  it('should ...', inject([AlbumResolverGuard], (guard: AlbumResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});

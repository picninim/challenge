import { TestBed, async, inject } from '@angular/core/testing';

import { TracksResolverGuard } from './tracks-resolver.guard';

describe('AlbumResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TracksResolverGuard]
    });
  });

  it('should ...', inject([TracksResolverGuard], (guard: TracksResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});

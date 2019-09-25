import { TestBed } from '@angular/core/testing';

import { VisitedAlbumsService } from './visited-albums.service';

describe('VisitedAlbumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitedAlbumsService = TestBed.get(VisitedAlbumsService);
    expect(service).toBeTruthy();
  });
});

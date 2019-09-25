import { TestBed, async, inject } from '@angular/core/testing';

import { LogoutGuardGuard } from './logout-guard.guard';

describe('LogoutGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogoutGuardGuard]
    });
  });

  it('should ...', inject([LogoutGuardGuard], (guard: LogoutGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, async, inject } from '@angular/core/testing';

import { LoginGuard.Guard.TsGuard } from './login-guard.guard.ts.guard';

describe('LoginGuard.Guard.TsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuard.Guard.TsGuard]
    });
  });

  it('should ...', inject([LoginGuard.Guard.TsGuard], (guard: LoginGuard.Guard.TsGuard) => {
    expect(guard).toBeTruthy();
  }));
});

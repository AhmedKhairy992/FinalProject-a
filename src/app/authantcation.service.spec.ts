import { TestBed } from '@angular/core/testing';

import { AuthantcationService } from './authantcation.service';

describe('AuthantcationService', () => {
  let service: AuthantcationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthantcationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

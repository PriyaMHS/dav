import { TestBed } from '@angular/core/testing';

import { NonInjectableService } from './non-injectable.service';

describe('NonInjectableService', () => {
  let service: NonInjectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonInjectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

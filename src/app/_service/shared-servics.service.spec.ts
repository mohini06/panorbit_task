import { TestBed } from '@angular/core/testing';

import { SharedServicsService } from './shared-servics.service';

describe('SharedServicsService', () => {
  let service: SharedServicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedServicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

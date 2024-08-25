import { TestBed } from '@angular/core/testing';

import { BestService } from './best.service';

describe('BestService', () => {
  let service: BestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

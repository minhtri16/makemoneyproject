import { TestBed } from '@angular/core/testing';

import { CataloghomeService } from './cataloghome.service';

describe('CataloghomeService', () => {
  let service: CataloghomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CataloghomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

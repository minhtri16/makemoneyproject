import { TestBed } from '@angular/core/testing';
import { CatalogListService } from './catalog-list.service';



describe('CatalogListService', () => {
  let service: CatalogListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

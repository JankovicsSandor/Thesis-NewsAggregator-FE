import { TestBed } from '@angular/core/testing';

import { NewsDataProviderService } from './news-data-provider.service';

describe('NewsDataProviderService', () => {
  let service: NewsDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

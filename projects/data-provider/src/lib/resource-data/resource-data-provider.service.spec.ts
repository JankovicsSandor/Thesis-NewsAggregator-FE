import { TestBed } from '@angular/core/testing';

import { ResourceDataProviderService } from './resource-data-provider.service';

describe('ResourceDataProviderService', () => {
  let service: ResourceDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

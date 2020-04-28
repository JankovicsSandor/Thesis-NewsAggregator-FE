import { TestBed } from '@angular/core/testing';

import { SourceConfigurationService } from './source-configuration.service';

describe('SourceConfigurationService', () => {
  let service: SourceConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourceConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

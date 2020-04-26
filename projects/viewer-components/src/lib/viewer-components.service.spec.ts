import { TestBed } from '@angular/core/testing';

import { ViewerComponentsService } from './viewer-components.service';

describe('ViewerComponentsService', () => {
  let service: ViewerComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewerComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LoaderIndicatorInterceptor } from './loader-indicator.interceptor';

describe('LoaderIndicatorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderIndicatorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoaderIndicatorInterceptor = TestBed.inject(LoaderIndicatorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

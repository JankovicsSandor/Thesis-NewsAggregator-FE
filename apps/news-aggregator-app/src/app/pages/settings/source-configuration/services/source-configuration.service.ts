import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { NewsConfiguration, NewResourceConfiguration } from '@shared';
import { ResourceDataProviderService } from '@data-provider';

@Injectable()
export class SourceConfigurationService {
  private lastSample$: ReplaySubject<NewsConfiguration> = new ReplaySubject();

  constructor(private resourceConfig: ResourceDataProviderService) {}

  getLastSample$() {
    return this.lastSample$.asObservable();
  }

  clearLastSample() {
    this.lastSample$.next(null);
  }

  getSampleFromUrl(url: string) {
    this.resourceConfig
      .getResourceConfiguration(url)
      .subscribe(this.lastSample$);
  }

  addNewResource(newItem: NewResourceConfiguration) {
    return this.resourceConfig.addNewResourceConfiguration(newItem).toPromise();
  }
}

import { Injectable } from '@angular/core';
import { ResourceDataProviderService } from '@data-provider';
import { ReplaySubject } from 'rxjs';
import { NewsConfiguration, NewResourceConfiguration } from '@shared';

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
    this.resourceConfig.addNewResourceConfiguration(newItem).subscribe(() => {
      // TODO
    });
  }
}

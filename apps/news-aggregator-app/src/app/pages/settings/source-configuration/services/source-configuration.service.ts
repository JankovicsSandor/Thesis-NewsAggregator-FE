import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { NewsConfiguration, NewResourceConfiguration, NewsItem } from '@shared';
import { ResourceDataProviderService } from '@data-provider';
import { map } from 'rxjs/operators';

@Injectable()
export class SourceConfigurationService {
  private lastSample$: ReplaySubject<NewsItem[]> = new ReplaySubject();

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
      .pipe(map(item => [item]))
      .subscribe(this.lastSample$);
  }

  addNewResource(newItem: NewResourceConfiguration) {
    return this.resourceConfig.addNewResourceConfiguration(newItem).toPromise();
  }
}

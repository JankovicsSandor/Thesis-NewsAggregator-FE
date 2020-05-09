import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsConfiguration, NewResourceConfiguration } from '@shared';
import { environment } from 'apps/news-aggregator-app/src/environments/environment';
import { NetworkClientService } from './network-client/network-client.service';

@Injectable()
export class ResourceDataProviderService extends NetworkClientService {
  constructor(protected http: HttpClient) {
    super(http, environment.aggregatorBEUrl);
  }

  getResourceConfiguration(url: string): Observable<NewsConfiguration> {
    return this.post('/api/configuration/request', null, { url: url });
  }

  addNewResourceConfiguration(url: NewResourceConfiguration): Observable<any> {
    return this.post('/api/configuration', null, { url: url });
  }
}

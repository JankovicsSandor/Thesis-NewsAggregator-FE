import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsConfiguration, NewResourceConfiguration } from '@shared';
import { environment } from 'apps/news-aggregator-app/src/environments/environment';
import { NetworkClientService } from '../network-client/network-client.service';

@Injectable()
export class ResourceDataProviderService extends NetworkClientService {
  constructor(protected http: HttpClient) {
    super(http, environment.resourceApi);
  }

  getResourceConfiguration(url: string): Observable<NewsConfiguration> {
    return this.post('configuration/request', null, { url: url });
  }

  addNewResourceConfiguration(
    model: NewResourceConfiguration
  ): Observable<any> {
    return this.post('configuration', null, model);
  }
}

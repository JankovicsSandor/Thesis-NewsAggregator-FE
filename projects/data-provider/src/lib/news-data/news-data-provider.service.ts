import { Injectable } from '@angular/core';
import { NewsQuery, NewsConfiguration, ArticleListResponse } from '@shared';
import { NetworkClientService } from '../network-client/network-client.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/news-aggregator-app/src/environments/environment';

@Injectable()
export class NewsDataProviderService extends NetworkClientService {
  constructor(protected http: HttpClient) {
    super(http, environment.newsApi);
  }

  public refreshHomePageNewsList() {
    return this.get<ArticleListResponse[]>('homepage');
  }
}

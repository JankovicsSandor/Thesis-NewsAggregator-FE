import { Injectable } from '@angular/core';
import { NewsQuery, NewsConfiguration, ArticleListResponse } from '@shared';
import { NetworkClientService } from '../network-client/network-client.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/news-aggregator-app/src/environments/environment';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class NewsDataProviderService extends NetworkClientService {
  private articleList$: ReplaySubject<
    ArticleListResponse
  > = new ReplaySubject();
  constructor(protected http: HttpClient) {
    super(http, environment.newsApi);
  }

  // TODO add store
  getArticles$() {
    return this.articleList$.asObservable();
  }

  refreshArticleList(query: NewsQuery) {
    this.get<ArticleListResponse>('article', query).subscribe(
      this.articleList$
    );
  }
}

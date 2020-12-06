import { Injectable } from '@angular/core';
import { NewsDataProviderService } from '@data-provider';
import { ArticleListResponse } from '@shared';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class NewsListService {
  private itemList: ReplaySubject<ArticleListResponse[]> = new ReplaySubject();
  constructor(private articleService: NewsDataProviderService) {}

  getNewsList$() {
    return this.itemList.asObservable();
  }
  refreshNewsList() {
    this.articleService.refreshHomePageNewsList().subscribe(this.itemList);
  }
}

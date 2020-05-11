import { Injectable } from '@angular/core';
import { NewsQuery, NewsConfiguration, ArticleListResponse } from '@shared';
import { NetworkClientService } from '../network-client/network-client.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/news-aggregator-app/src/environments/environment';
import { ReplaySubject, BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, withLatestFrom, filter } from 'rxjs/operators';

@Injectable()
export class NewsDataProviderService extends NetworkClientService {
  private articleList$: ReplaySubject<
    ArticleListResponse
  > = new ReplaySubject();
  private pageNumber: ReplaySubject<{
    num: number;
    shouldRefresh: boolean;
  }> = new ReplaySubject();
  private queryObject: BehaviorSubject<NewsQuery> = new BehaviorSubject(null);
  private pageNumber$: ReplaySubject<number[]> = new ReplaySubject();
  constructor(protected http: HttpClient) {
    super(http, environment.newsApi);

    this.pageNumber
      .pipe(
        //Filter out the same number clicks
        distinctUntilChanged(
          (
            p: {
              num: number;
              shouldRefresh: boolean;
            },
            q: {
              num: number;
              shouldRefresh: boolean;
            }
          ) => p.num === q.num
        )
      )
      .pipe(withLatestFrom(this.queryObject))
      .subscribe(([pageNumber, queryObject]) => {
        if (queryObject) {
          queryObject.page = pageNumber.num;
        } else {
          queryObject = <NewsQuery>{
            page: pageNumber.num
          };
        }

        this.get<ArticleListResponse>('article', queryObject).subscribe(val => {
          // TODO investigate why copy is needed
          this.articleList$.next(JSON.parse(JSON.stringify(val)));
          if (pageNumber.shouldRefresh) {
            this.createPageNumberArray(val.total);
          }
        });
      });

    this.queryObject.subscribe(queryObject => {
      this.get<ArticleListResponse>('article', queryObject).subscribe(val => {
        // TODO investigate why copy is needed
        this.articleList$.next(JSON.parse(JSON.stringify(val)));
        this.createPageNumberArray(val.total);
      });
    });
  }

  createPageNumberArray(maxValue: number) {
    let pageNumbers = [];
    let number = 1;
    for (let pageNumber = 0; pageNumber < maxValue; pageNumber += 50) {
      pageNumbers.push(number);
      number++;
    }
    if (number * 50 < maxValue) {
      pageNumbers.push(number);
    }
    this.pageNumber.next({ num: 1, shouldRefresh: false });
    this.pageNumber$.next(pageNumbers);
  }

  // TODO add store
  getArticles$() {
    return this.articleList$.asObservable();
  }

  setPageNumber(page: number, shouldRefresh: boolean) {
    this.pageNumber.next({ num: page, shouldRefresh: shouldRefresh });
  }

  getSelectedPageNumber() {
    return this.pageNumber.asObservable();
  }

  getPageList() {
    return this.pageNumber$.asObservable();
  }

  refreshArticleList(query: NewsQuery) {
    this.queryObject.next(query);
  }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ArticleListResponse } from '@shared';
import { NewsDataProviderService } from '@data-provider';
import { NewsListService } from './news-list.service';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent implements OnInit {
  newsList: ReplaySubject<ArticleListResponse[]> = new ReplaySubject();
  constructor(private newsService: NewsListService) {
    this.newsService.refreshNewsList();
  }

  ngOnInit(): void {
    this.newsService.getNewsList$().subscribe(this.newsList);
  }
}

import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ArticleListResponse } from '@shared';
import { NewsDataProviderService } from '@data-provider';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: ReplaySubject<ArticleListResponse> = new ReplaySubject();
  constructor(private articleService: NewsDataProviderService) {}

  ngOnInit(): void {
    this.articleService.getArticles$().subscribe(this.newsList);
  }
}

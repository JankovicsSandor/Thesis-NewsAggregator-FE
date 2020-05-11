import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { NewsConfiguration } from '@shared';
import { NewsDataProviderService } from '@data-provider';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: ReplaySubject<NewsConfiguration[]> = new ReplaySubject();
  constructor(private articleService: NewsDataProviderService) {}

  ngOnInit(): void {
    this.articleService.getArticles$().subscribe(this.newsList);
  }
}

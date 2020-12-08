import { Component, OnInit, Input } from '@angular/core';
import { NewsConfiguration, NewsItem } from '@shared';
import { ReplaySubject } from 'rxjs';
import { max } from 'rxjs/operators';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input()
  set newsGroup(value: NewsItem[]) {
    if (value) {
      let maxNumber = value.length;
      if (maxNumber > 1) {
        let indexArticleNumber = Math.floor(Math.random() * maxNumber - 1) + 1;
        this.mainArticle.next(value[indexArticleNumber]);
        value.splice(indexArticleNumber, 1);
        this.similarArticles.next(value);
      } else {
        this.mainArticle.next(value[0]);
        this.similarArticles.next([]);
      }
    } else {
      this.mainArticle.next(null);
      this.similarArticles.next([]);
    }
  }

  mainArticle: ReplaySubject<NewsItem> = new ReplaySubject();
  similarArticles: ReplaySubject<NewsItem[]> = new ReplaySubject();
  constructor() {}

  ngOnInit(): void {}
}

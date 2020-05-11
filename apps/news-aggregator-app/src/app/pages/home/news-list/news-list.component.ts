import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ArticleListResponse } from '@shared';
import { NewsDataProviderService } from '@data-provider';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent implements OnInit {
  pageNumbers: ReplaySubject<number[]> = new ReplaySubject();
  newsList: ReplaySubject<ArticleListResponse> = new ReplaySubject();
  pageList$: ReplaySubject<number[]> = new ReplaySubject();
  constructor(private articleService: NewsDataProviderService) {}

  ngOnInit(): void {
    this.articleService.getArticles$().subscribe(this.newsList);
    this.articleService.getSelectedPageNumber().subscribe(val => {
      window.setTimeout(() => {
        this.setButtonClicked(val.num);
      }, 200);
    });

    this.articleService.getPageList().subscribe(this.pageList$);
  }

  setButtonClicked(pNumber: number) {
    let activeElement = document.getElementsByClassName('pageNumber-active');
    if (activeElement[0]) {
      activeElement[0].classList.remove('pageNumber-active');
    }

    let pages = document.getElementsByClassName('pageNumber');
    if (pages[0]) {
      pages[pNumber - 1].classList.add('pageNumber-active');
    }
  }

  setPageNumber(pNumber: number) {
    this.setButtonClicked(pNumber);
    this.articleService.setPageNumber(pNumber, false);
  }
}

import { Component, OnInit } from '@angular/core';
import { NewsQuery, NewsFormQuery } from '@shared';
import { NewsDataProviderService } from '@data-provider';
import { DateToString } from '@utils';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
  constructor(private articleService: NewsDataProviderService) {}

  ngOnInit(): void {}

  refreshArticleList(query: NewsFormQuery) {
    let queryModel = <NewsQuery>{
      contains: query.contains
    };
    if (query.minDate) {
      queryModel.minDate = DateToString(query.minDate, '/');
    }
    if (query.maxDate) {
      queryModel.maxDate = DateToString(query.maxDate, '/');
    }
    this.articleService.refreshArticleList(queryModel);
  }
}

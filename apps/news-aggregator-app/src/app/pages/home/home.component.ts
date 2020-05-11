import { Component, OnInit } from '@angular/core';
import { NewsDataProviderService } from '@data-provider';

@Component({
  selector: 'news-aggregator-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private newsData: NewsDataProviderService) {}

  ngOnInit(): void {
    this.newsData.getArticles(null);
  }
}

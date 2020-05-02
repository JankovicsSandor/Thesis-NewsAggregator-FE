import { Component, OnInit } from '@angular/core';
import { INewsItem } from '@shared';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: BehaviorSubject<INewsItem[]> = new BehaviorSubject(
    this.getNewsItems()
  );
  constructor() {}

  ngOnInit(): void {}

  getNewsItems() {
    return [
      <INewsItem>{
        description: 'Something happened',
        title: 'Hello there',
        publishDate: new Date()
      },
      <INewsItem>{
        description: 'Something happened',
        title: 'Hello there',
        publishDate: new Date()
      },
      <INewsItem>{
        description: 'Something happened',
        title: 'Hello there',
        publishDate: new Date()
      },
      <INewsItem>{
        description: 'Something happened',
        title: 'Hello there',
        publishDate: new Date()
      },
      <INewsItem>{
        description: 'Something happened',
        title: 'Hello there',
        publishDate: new Date()
      }
    ];
  }
}

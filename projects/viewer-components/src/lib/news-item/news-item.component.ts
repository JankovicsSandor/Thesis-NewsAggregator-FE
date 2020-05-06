import { Component, OnInit, Input } from '@angular/core';
import { NewsConfiguration } from '@shared';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() newsItem: NewsConfiguration;
  constructor() {}

  ngOnInit(): void {}
}

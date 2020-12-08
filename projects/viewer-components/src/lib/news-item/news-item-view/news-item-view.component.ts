import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { NewsItem } from '@shared';

@Component({
  selector: 'news-item-view',
  templateUrl: './news-item-view.component.html',
  styleUrls: ['./news-item-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsItemViewComponent implements OnInit {
  @Input() mainNews: NewsItem;
  similarArticles: NewsItem[];
  showSimilar: boolean;
  @Input()
  set similarities(value: NewsItem[]) {
    if (value && value.length != 0) {
      this.similarArticles = value;
      this.showSimilar = true;
    } else {
      this.showSimilar = false;
    }
  }

  show;
  constructor() {}

  ngOnInit(): void {}
}

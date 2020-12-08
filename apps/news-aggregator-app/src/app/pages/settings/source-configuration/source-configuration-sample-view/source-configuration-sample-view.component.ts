import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsConfiguration, NewResourceConfiguration, NewsItem } from '@shared';

@Component({
  selector: 'news-aggregator-app-source-configuration-sample-view',
  templateUrl: './source-configuration-sample-view.component.html',
  styleUrls: ['./source-configuration-sample-view.component.css']
})
export class SourceConfigurationSampleViewComponent implements OnInit {
  @Input() sample: NewsItem[];
  constructor() {}

  ngOnInit(): void {}
}

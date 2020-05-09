import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsConfiguration } from '@shared';

@Component({
  selector: 'news-aggregator-app-source-configuration-sample-view',
  templateUrl: './source-configuration-sample-view.component.html',
  styleUrls: ['./source-configuration-sample-view.component.css']
})
export class SourceConfigurationSampleViewComponent implements OnInit {
  @Input() sample: NewsConfiguration;

  @Output() saveEvent: EventEmitter<NewsConfiguration> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  saveItem() {
    this.saveEvent.emit(this.sample);
  }
}

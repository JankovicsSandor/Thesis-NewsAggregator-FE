import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'news-aggregator-app-source-configuration',
  templateUrl: './source-configuration.component.html',
  styleUrls: ['./source-configuration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceConfigurationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

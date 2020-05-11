import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SourceConfigurationService } from './services/source-configuration.service';
import { ReplaySubject } from 'rxjs';
import { NewsConfiguration, NewResourceConfiguration } from '@shared';

@Component({
  selector: 'news-aggregator-app-source-configuration',
  templateUrl: './source-configuration.component.html',
  styleUrls: ['./source-configuration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceConfigurationComponent implements OnInit {
  lastSample$: ReplaySubject<NewsConfiguration> = new ReplaySubject();
  constructor(private sourceConfigService: SourceConfigurationService) {}

  ngOnInit(): void {
    this.sourceConfigService.getLastSample$().subscribe(this.lastSample$);
  }

  downnloadSampleArticleFromSource(url: string) {
    this.sourceConfigService.getSampleFromUrl(url);
  }

  saveResource(config: NewResourceConfiguration) {
    this.sourceConfigService.addNewResource(config);
  }
}

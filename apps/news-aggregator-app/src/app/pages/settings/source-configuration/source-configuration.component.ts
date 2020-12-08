import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SourceConfigurationService } from './services/source-configuration.service';
import { ReplaySubject } from 'rxjs';
import { NewsConfiguration, NewResourceConfiguration, NewsItem } from '@shared';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'news-aggregator-app-source-configuration',
  templateUrl: './source-configuration.component.html',
  styleUrls: ['./source-configuration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceConfigurationComponent implements OnInit {
  lastSample$: ReplaySubject<NewsItem[]> = new ReplaySubject();
  constructor(
    private sourceConfigService: SourceConfigurationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.sourceConfigService.getLastSample$().subscribe(this.lastSample$);
  }

  downnloadSampleArticleFromSource(url: string) {
    this.sourceConfigService.getSampleFromUrl(url);
  }

  saveResource(config: NewResourceConfiguration) {
    this.sourceConfigService
      .addNewResource(config)
      .then(value => {
        this.toastr.success('Saved new resurce', 'Saved');
      })
      .catch(err => {
        this.toastr.error('Error happened during save', 'Error');
      });
  }
}

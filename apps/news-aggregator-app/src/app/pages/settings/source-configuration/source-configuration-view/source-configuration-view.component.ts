import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'news-aggregator-app-source-configuration-view',
  templateUrl: './source-configuration-view.component.html',
  styleUrls: ['./source-configuration-view.component.css']
})
export class SourceConfigurationViewComponent implements OnInit {
  @Output() refreshConfiguration: EventEmitter<string> = new EventEmitter<
    string
  >();
  urlControl: FormControl;
  constructor() {
    this.urlControl = new FormControl();
  }

  ngOnInit(): void {}

  refreshConfig() {
    this.refreshConfiguration.emit(this.urlControl.value);
  }
}

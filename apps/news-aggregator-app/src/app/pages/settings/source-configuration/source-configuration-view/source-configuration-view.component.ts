import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';
import { NewResourceConfiguration } from '@shared';

@Component({
  selector: 'news-aggregator-app-source-configuration-view',
  templateUrl: './source-configuration-view.component.html',
  styleUrls: ['./source-configuration-view.component.css']
})
export class SourceConfigurationViewComponent implements OnInit {
  @Output() refreshConfiguration: EventEmitter<string> = new EventEmitter<
    string
  >();
  @Output() saveConfiguration: EventEmitter<
    NewResourceConfiguration
  > = new EventEmitter<NewResourceConfiguration>();
  addForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      url: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  refreshConfig() {
    this.refreshConfiguration.emit(this.addForm.value.url);
  }

  saveConfig() {
    this.saveConfiguration.emit(<NewResourceConfiguration>{
      name: this.addForm.value.name,
      url: this.addForm.value.url
    });
    this.addForm.reset();
  }
}

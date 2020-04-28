import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { SourceConfigurationComponent } from './source-configuration.component';
import { MatIconModule } from '@angular/material/icon';
import { SourceConfigurationViewComponent } from './source-configuration-view/source-configuration-view.component';
import { SimpleSelectModule } from '@viewer-components';

@NgModule({
  declarations: [
    SourceConfigurationComponent,
    SourceConfigurationViewComponent
  ],
  imports: [CommonModule, MatInputModule, MatIconModule, SimpleSelectModule],
  exports: [SourceConfigurationComponent]
})
export class SourceConfigurationModule {}

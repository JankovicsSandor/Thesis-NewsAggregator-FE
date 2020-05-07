import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { SourceConfigurationComponent } from './source-configuration.component';
import { MatIconModule } from '@angular/material/icon';
import { SourceConfigurationViewComponent } from './source-configuration-view/source-configuration-view.component';
import { SimpleSelectModule, NewsItemModule } from '@viewer-components';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SourceConfigurationService } from './services/source-configuration.service';

@NgModule({
  providers: [SourceConfigurationService],
  declarations: [
    SourceConfigurationComponent,
    SourceConfigurationViewComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    NewsItemModule,
    ReactiveFormsModule,
    SimpleSelectModule
  ],
  exports: [SourceConfigurationComponent]
})
export class SourceConfigurationModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SourceConfigurationModule } from './source-configuration/source-configuration.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, SettingsRoutingModule, SourceConfigurationModule]
})
export class SettingsModule {}

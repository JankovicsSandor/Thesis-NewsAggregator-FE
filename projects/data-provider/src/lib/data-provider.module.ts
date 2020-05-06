import { NgModule } from '@angular/core';
import { ResourceDataProviderService } from './resource-data-provider.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [ResourceDataProviderService]
})
export class DataProviderModule {}

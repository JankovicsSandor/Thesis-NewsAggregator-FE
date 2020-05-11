import { NgModule } from '@angular/core';
import { ResourceDataProviderService } from './resource-data/resource-data-provider.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsDataProviderService } from './news-data/news-data-provider.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ResourceDataProviderService, NewsDataProviderService]
})
export class DataProviderModule {}

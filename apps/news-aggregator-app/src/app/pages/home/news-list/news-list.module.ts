import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { NewsItemModule } from '@viewer-components';

@NgModule({
  declarations: [NewsListComponent],
  imports: [CommonModule, NewsItemModule],
  exports: [NewsListComponent]
})
export class NewsListModule {}

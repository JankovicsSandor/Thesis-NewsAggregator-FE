import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { NewsItemModule } from '@viewer-components';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NewsListComponent],
  imports: [CommonModule, NewsItemModule, MatButtonModule],
  exports: [NewsListComponent]
})
export class NewsListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { NewsItemModule } from '@viewer-components';
import { MatButtonModule } from '@angular/material/button';
import { NewsListService } from './news-list.service';

@NgModule({
  declarations: [NewsListComponent],
  imports: [CommonModule, NewsItemModule, MatButtonModule],
  providers: [NewsListService],
  exports: [NewsListComponent]
})
export class NewsListModule {}

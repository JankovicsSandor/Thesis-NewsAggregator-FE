import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItemComponent } from './news-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NewsItemViewComponent } from './news-item-view/news-item-view.component';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [NewsItemComponent, NewsItemViewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ClipboardModule,
    MatDividerModule
  ],
  exports: [NewsItemComponent]
})
export class NewsItemModule {}

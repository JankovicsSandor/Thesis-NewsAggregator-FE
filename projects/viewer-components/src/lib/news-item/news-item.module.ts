import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItemComponent } from './news-item.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NewsItemComponent],
  imports: [CommonModule, MatCardModule],
  exports: [NewsItemComponent]
})
export class NewsItemModule {}

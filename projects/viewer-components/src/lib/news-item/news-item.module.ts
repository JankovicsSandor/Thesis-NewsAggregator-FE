import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItemComponent } from './news-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NewsItemComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [NewsItemComponent]
})
export class NewsItemModule {}

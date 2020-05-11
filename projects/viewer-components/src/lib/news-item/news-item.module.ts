import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsItemComponent } from './news-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [NewsItemComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, ClipboardModule],
  exports: [NewsItemComponent]
})
export class NewsItemModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsListModule } from './news-list/news-list.module';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NewsListModule, CategoryModule]
})
export class HomeModule {}

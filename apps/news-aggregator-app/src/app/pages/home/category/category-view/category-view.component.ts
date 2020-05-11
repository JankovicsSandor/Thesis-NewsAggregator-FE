import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsQuery, NewsFormQuery } from '@shared';

@Component({
  selector: 'category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
  @Output() refresh: EventEmitter<NewsFormQuery> = new EventEmitter();
  filterForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      textFilter: [null],
      minDate: [null],
      maxDate: [null]
    });
  }

  ngOnInit(): void {}

  refreshNewsList() {
    let filterValue = this.filterForm.value;
    this.refresh.emit(<NewsFormQuery>{
      contains: filterValue.textFilter,
      maxDate: filterValue.maxDate,
      minDate: filterValue.minDate
    });
  }
}

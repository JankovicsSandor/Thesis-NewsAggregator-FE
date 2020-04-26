import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { ISelectItem } from '@shared';
import { ReplaySubject, BehaviorSubject, combineLatest } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'simple-select',
  templateUrl: './simple-select.component.html',
  styleUrls: ['./simple-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleSelectComponent implements OnInit {
  searchControl = new FormControl();
  listItems: ReplaySubject<ISelectItem[]> = new ReplaySubject();
  filteredList: ReplaySubject<ISelectItem[]> = new ReplaySubject();

  // By default the filtering of results are based on text
  filterProperty: BehaviorSubject<string> = new BehaviorSubject('text');

  @Input() set filterByProperty(property: string) {
    this.filterProperty.next(property);
  }

  @Input() set itemList(items: ISelectItem[]) {
    this.listItems.next(items);
  }
  constructor() {}

  ngOnInit(): void {
    combineLatest(
      this.filterByProperty,
      this.listItems,
      this.searchControl.valueChanges
    )
      .pipe(
        map(([filterProperty, listItems, searchTerm]) => {
          return listItems.filter(
            option => option[filterProperty].indexOf(searchTerm) === 0
          );
        })
      )
      .subscribe(this.filteredList);
  }
}

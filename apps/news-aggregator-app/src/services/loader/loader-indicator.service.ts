import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderIndicatorService {
  private progressBarVisibility: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  constructor() {}

  getProgressBarVisibility$() {
    return this.progressBarVisibility.asObservable();
  }

  setProgressBarVisibility(value: boolean) {
    this.progressBarVisibility.next(value);
  }
}

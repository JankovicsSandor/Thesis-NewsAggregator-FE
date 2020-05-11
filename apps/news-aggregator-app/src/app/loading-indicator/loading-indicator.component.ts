import { Component, OnInit } from '@angular/core';
import { LoaderIndicatorService } from '../../services/loader/loader-indicator.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent implements OnInit {
  showBar$: ReplaySubject<boolean> = new ReplaySubject();
  constructor(private indicatorService: LoaderIndicatorService) {}

  ngOnInit(): void {
    this.indicatorService.getProgressBarVisibility$().subscribe(this.showBar$);
  }
}

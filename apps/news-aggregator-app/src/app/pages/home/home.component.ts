import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INewsItem } from '@shared';

@Component({
  selector: 'news-aggregator-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
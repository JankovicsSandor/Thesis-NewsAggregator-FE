import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerComponentsComponent } from './viewer-components.component';

describe('ViewerComponentsComponent', () => {
  let component: ViewerComponentsComponent;
  let fixture: ComponentFixture<ViewerComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

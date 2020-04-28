import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceConfigurationViewComponent } from './source-configuration-view.component';

describe('SourceConfigurationViewComponent', () => {
  let component: SourceConfigurationViewComponent;
  let fixture: ComponentFixture<SourceConfigurationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceConfigurationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceConfigurationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

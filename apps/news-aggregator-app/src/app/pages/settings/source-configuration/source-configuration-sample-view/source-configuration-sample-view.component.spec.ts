import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceConfigurationSampleViewComponent } from './source-configuration-sample-view.component';

describe('SourceConfigurationSampleViewComponent', () => {
  let component: SourceConfigurationSampleViewComponent;
  let fixture: ComponentFixture<SourceConfigurationSampleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceConfigurationSampleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceConfigurationSampleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

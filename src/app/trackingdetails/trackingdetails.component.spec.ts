import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingdetailsComponent } from './trackingdetails.component';

describe('TrackingdetailsComponent', () => {
  let component: TrackingdetailsComponent;
  let fixture: ComponentFixture<TrackingdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackingdetailsComponent]
    });
    fixture = TestBed.createComponent(TrackingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

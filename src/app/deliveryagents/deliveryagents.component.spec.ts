import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryagentsComponent } from './deliveryagents.component';

describe('DeliveryagentsComponent', () => {
  let component: DeliveryagentsComponent;
  let fixture: ComponentFixture<DeliveryagentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryagentsComponent]
    });
    fixture = TestBed.createComponent(DeliveryagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

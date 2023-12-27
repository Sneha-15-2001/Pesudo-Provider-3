import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JioadminComponent } from './jioadmin.component';

describe('JioadminComponent', () => {
  let component: JioadminComponent;
  let fixture: ComponentFixture<JioadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JioadminComponent]
    });
    fixture = TestBed.createComponent(JioadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

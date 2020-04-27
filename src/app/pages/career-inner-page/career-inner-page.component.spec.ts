import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerInnerPageComponent } from './career-inner-page.component';

describe('CareerInnerPageComponent', () => {
  let component: CareerInnerPageComponent;
  let fixture: ComponentFixture<CareerInnerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerInnerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerInnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

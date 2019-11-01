import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItOutsourceComponent } from './it-outsource.component';

describe('ItOutsourceComponent', () => {
  let component: ItOutsourceComponent;
  let fixture: ComponentFixture<ItOutsourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItOutsourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItOutsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

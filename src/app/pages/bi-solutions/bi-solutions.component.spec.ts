import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiSolutionsComponent } from './bi-solutions.component';

describe('BiSolutionsComponent', () => {
  let component: BiSolutionsComponent;
  let fixture: ComponentFixture<BiSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

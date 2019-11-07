import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreTechnologiesComponent } from './more-technologies.component';

describe('MoreTechnologiesComponent', () => {
  let component: MoreTechnologiesComponent;
  let fixture: ComponentFixture<MoreTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

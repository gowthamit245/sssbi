import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInterfaceComponent } from './web-interface.component';

describe('WebInterfaceComponent', () => {
  let component: WebInterfaceComponent;
  let fixture: ComponentFixture<WebInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

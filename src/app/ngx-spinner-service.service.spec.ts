import { TestBed } from '@angular/core/testing';

import { NgxSpinnerServiceService } from './ngx-spinner-service.service';

describe('NgxSpinnerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSpinnerServiceService = TestBed.get(NgxSpinnerServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetApartmentService } from './get-apartment.service';

describe('GetApartmentService', () => {
  let service: GetApartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

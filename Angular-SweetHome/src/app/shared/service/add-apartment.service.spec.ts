import { TestBed } from '@angular/core/testing';

import { AddApartmentService } from './add-apartment.service';

describe('AddApartmentService', () => {
  let service: AddApartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddApartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

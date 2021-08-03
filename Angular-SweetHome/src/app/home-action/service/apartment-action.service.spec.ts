import { TestBed } from '@angular/core/testing';

import { ApartmentActionService } from './apartment-action.service';

describe('ApartmentActionService', () => {
  let service: ApartmentActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

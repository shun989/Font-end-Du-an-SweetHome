import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowApartmentComponent } from './show-apartment.component';

describe('ShowApartmentComponent', () => {
  let component: ShowApartmentComponent;
  let fixture: ComponentFixture<ShowApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowApartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

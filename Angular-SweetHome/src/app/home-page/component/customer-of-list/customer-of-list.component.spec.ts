import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOfListComponent } from './customer-of-list.component';

describe('CustomerOfListComponent', () => {
  let component: CustomerOfListComponent;
  let fixture: ComponentFixture<CustomerOfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOfListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

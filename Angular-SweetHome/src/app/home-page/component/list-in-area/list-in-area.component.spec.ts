import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInAreaComponent } from './list-in-area.component';

describe('ListInAreaComponent', () => {
  let component: ListInAreaComponent;
  let fixture: ComponentFixture<ListInAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

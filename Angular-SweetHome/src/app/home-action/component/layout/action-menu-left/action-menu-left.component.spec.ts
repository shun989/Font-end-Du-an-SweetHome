import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMenuLeftComponent } from './action-menu-left.component';

describe('ActionMenuLeftComponent', () => {
  let component: ActionMenuLeftComponent;
  let fixture: ComponentFixture<ActionMenuLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionMenuLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMenuLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

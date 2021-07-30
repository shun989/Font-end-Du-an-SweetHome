import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMenuTopComponent } from './action-menu-top.component';

describe('ActionMenuTopComponent', () => {
  let component: ActionMenuTopComponent;
  let fixture: ComponentFixture<ActionMenuTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionMenuTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMenuTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

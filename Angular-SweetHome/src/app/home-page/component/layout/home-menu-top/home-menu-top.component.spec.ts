import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenuTopComponent } from './home-menu-top.component';

describe('HomeMenuTopComponent', () => {
  let component: HomeMenuTopComponent;
  let fixture: ComponentFixture<HomeMenuTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMenuTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMenuTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

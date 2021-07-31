import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApamentsHotListComponent } from './apaments-hot-list.component';

describe('ApamentsHotListComponent', () => {
  let component: ApamentsHotListComponent;
  let fixture: ComponentFixture<ApamentsHotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApamentsHotListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApamentsHotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

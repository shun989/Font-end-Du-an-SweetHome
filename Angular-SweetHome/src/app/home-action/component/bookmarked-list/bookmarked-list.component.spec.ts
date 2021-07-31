import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedListComponent } from './bookmarked-list.component';

describe('BookmarkedListComponent', () => {
  let component: BookmarkedListComponent;
  let fixture: ComponentFixture<BookmarkedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

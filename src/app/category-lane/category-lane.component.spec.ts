import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLaneComponent } from './category-lane.component';

describe('CategoryLaneComponent', () => {
  let component: CategoryLaneComponent;
  let fixture: ComponentFixture<CategoryLaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryLaneComponent]
    });
    fixture = TestBed.createComponent(CategoryLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

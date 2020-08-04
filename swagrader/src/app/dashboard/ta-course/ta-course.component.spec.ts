import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaCourseComponent } from './ta-course.component';

describe('TaCourseComponent', () => {
  let component: TaCourseComponent;
  let fixture: ComponentFixture<TaCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

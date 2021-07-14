import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomExerciseComponent } from './custom-exercise.component';

describe('CustomExerciseComponent', () => {
  let component: CustomExerciseComponent;
  let fixture: ComponentFixture<CustomExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

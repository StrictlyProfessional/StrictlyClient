import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomExerciseComponent } from './edit-custom-exercise.component';

describe('EditCustomExerciseComponent', () => {
  let component: EditCustomExerciseComponent;
  let fixture: ComponentFixture<EditCustomExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

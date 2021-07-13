import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexerciseComponent } from './addexercise.component';

describe('AddexerciseComponent', () => {
  let component: AddexerciseComponent;
  let fixture: ComponentFixture<AddexerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddexerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

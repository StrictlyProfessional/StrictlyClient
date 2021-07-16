import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddworkoutComponent } from './addworkout.component';

describe('AddworkoutComponent', () => {
  let component: AddworkoutComponent;
  let fixture: ComponentFixture<AddworkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddworkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddworkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

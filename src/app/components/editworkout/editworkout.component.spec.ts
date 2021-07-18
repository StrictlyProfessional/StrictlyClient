import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditworkoutComponent } from './editworkout.component';

describe('EditworkoutComponent', () => {
  let component: EditworkoutComponent;
  let fixture: ComponentFixture<EditworkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditworkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditworkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

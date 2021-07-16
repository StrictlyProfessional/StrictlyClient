import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addworkout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css']
})
export class AddworkoutComponent implements OnInit {

  workoutForm = this.formBuilder.group({
    name: '',
  });

  @Output() onWorkout: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  setWorkout() {
    this.onWorkout.emit(false);
  }

  onSubmit() {
    
  }

}

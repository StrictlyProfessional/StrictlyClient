import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/classes/classes';
import { addCookie, grabUser } from 'src/app/functions/userFunc';
import { WorkoutService } from 'src/app/services/workout/workout.service';

@Component({
  selector: 'app-editworkout',
  templateUrl: './editworkout.component.html',
  styleUrls: ['./editworkout.component.css']
})
export class EditworkoutComponent implements OnInit {

  user : User = grabUser();
  workoutForm : FormGroup;

  @Input() workout;
  @Output() onWorkout: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workoutForm = this.formBuilder.group({
      name: this.workout.name
    });
  }

  setWorkout() {
    this.onWorkout.emit(false);
  }

  onSubmit(): void {
    this.workout.name = this.workoutForm.value.name;
    this.workoutService.update(this.workout);
    this.setWorkout();
    window.location.reload();
    alert("Workout edited");
  }
}

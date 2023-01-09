import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Habit } from './models/habit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public adding = false;
  public editing = false;
  public editingIndex: number;

  public habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  public habits: Habit[] = [
    <Habit>{
      name: 'Promenade de 15 minutes',
      frequency: 'Chaque jour',
      description: 'Se promener est bien pour la santé.',
    },
    <Habit>{
      name: 'Arroser les fleurs',
      frequency: 'Une fois par semaine',
      description: 'Un peu de verdure à la maison',

    },
  ];
  public onSubmit() {
    const habit = this.habitForm.value as Habit;

    if (this.editing) {
      this.habits.splice(this.editingIndex, 1, habit);
    } else {
      this.habits.push(habit);
    }

    this.editing = false;
    this.adding = false;
  }

  public setEditForm(habit: Habit, index: number) {
    this.habitForm.patchValue({
      name: habit.name,
      frequency: habit.frequency,
      description: habit.description,
    });
    this.editing = true;
    this.editingIndex = index;
  }

  public onDelete(index: number) {
    this.habits.splice(index, 1);
  }

  exitForm() {
    this.adding = false;
    this.editing = false;
    this.habitForm.reset();
  }
}


import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromTodo } from '../+state';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from '../ui';

@Component({
  selector: 'todo-todos',
  standalone: true,
  imports: [CommonModule, TodoCardComponent],
  template: `
    <div class="todo-list" *ngIf="todos$ | async as todos">
      <todo-todo-card [todo]="todo" *ngFor="let todo of todos"></todo-todo-card>
    </div>
  `,
})
export default class TodosComponent {
  private store = inject(Store);
  todos$ = this.store.select(fromTodo.getTodos);
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'todo-todo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `<button routerLink="/todos">Back</button>`,
})
export default class TodoComponent {
  @Input() id!: number;

  ngOnInit(): void {
    console.log(this.id);
  }
}

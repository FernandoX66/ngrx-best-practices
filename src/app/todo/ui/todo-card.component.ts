import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todo } from '../domain';

@Component({
  selector: 'todo-todo-card',
  standalone: true,
  template: `
    <div class="todo-card">
      <h3 class="todo-title">{{ todo.title }}</h3>
      <p class="todo-status">
        Status: <span class="todo-completed">{{ todo.completed }}</span>
      </p>
      <a [routerLink]="[todo.id]" class="open-button">Open</a>
    </div>
  `,
  styles: `
    // Variables
    $button-background: #007bff; // Blue color for button background
    $button-color: #ffffff; // White color for button text
    $button-hover-background: #0056b3; // Darker blue color for button background on hover
    $card-background: #ffffff;
    $card-border: 1px solid #ddd;
    $card-padding: 20px;
    $card-margin: 10px;
    $card-title-color: #333;
    $card-title-font-size: 18px;
    $card-completed-color: #28a745; // Green for completed todos
    $card-not-completed-color: #dc3545; // Red for not completed todos

    // Styles
    .open-button {
      display: inline-block;
      padding: 8px 16px;
      background-color: $button-background;
      color: $button-color;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      text-decoration: none;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: $button-hover-background;
      }
    }

    .todo-card {
      background-color: $card-background;
      border: $card-border;
      border-radius: 10px;
      padding: $card-padding;
      margin: $card-margin;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
    }

    .todo-title {
      color: $card-title-color;
      font-size: $card-title-font-size;
      margin-bottom: 10px;
    }

    .todo-status {
      font-size: 14px;
      margin-top: 10px;
    }

    .todo-completed {
      color: $card-completed-color;
    }

    .todo-not-completed {
      color: $card-not-completed-color;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class TodoCardComponent {
  @Input({ required: true }) todo!: Todo;
}

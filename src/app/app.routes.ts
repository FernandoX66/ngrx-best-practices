import { Routes } from '@angular/router';
import { TodoGuard } from './todo/features/todo.guard';

export const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () => import('./todo').then((todo) => todo.todoRoutes),
    canActivate: [TodoGuard],
  },
];

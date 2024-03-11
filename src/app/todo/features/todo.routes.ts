import { Routes } from '@angular/router';

export const todoRoutes: Routes = [
  {
    path: ':id',
    loadComponent: () => import('./todo.component'),
  },
  {
    path: '',
    loadComponent: () => import('./todos.component'),
  },
];

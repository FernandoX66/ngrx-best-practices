import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideStore } from '@ngrx/store';
import { TODO_KEY, TodoEffects, todoReducer } from './todo';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { TodoService } from './todo/domain/todo.service';
import { TodoGuard } from './todo/features/todo.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    TodoService,
    TodoGuard,
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    provideStore({
      [TODO_KEY]: todoReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(TodoEffects),
  ],
};

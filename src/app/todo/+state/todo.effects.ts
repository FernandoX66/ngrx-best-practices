import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { todoActions } from './todo.actions';
import { combineLatestWith, filter, map, switchMap } from 'rxjs';
import { TodoService } from '../domain/todo.service';
import { Store } from '@ngrx/store';
import { fromTodo } from './todo.selectors';

@Injectable()
export class TodoEffects {
  private actions$ = inject(Actions);
  private todoService = inject(TodoService);
  private store = inject(Store);

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.get),
      combineLatestWith(this.store.select(fromTodo.getLoadStatus)),
      filter(([, loadStatus]) => loadStatus === 'NOT_LOADED'),
      map(() => todoActions.load())
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.load),
      switchMap(() => this.todoService.getAll()),
      map((todos) => todoActions.loadSuccess({ todos }))
    )
  );
}

import { inject, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { filter, map, Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { fromTodo, todoActions } from '../+state';

@Injectable()
export class TodoGuard implements CanActivate {
  private store = inject(Store);

  canActivate(): Observable<boolean> {
    this.store.dispatch(todoActions.get());

    return this.store.select(fromTodo.getLoadStatus).pipe(
      filter((loadStatus) => loadStatus === 'LOADED'),
      map(() => true)
    );
  }
}

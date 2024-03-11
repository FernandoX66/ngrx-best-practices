import { createReducer, on } from '@ngrx/store';

import { State } from './state.interface';
import { todoActions } from './todo.actions';

const initialState: State = {
  todos: [],
  loadStatus: 'NOT_LOADED',
};

export const todoReducer = createReducer<State>(
  initialState,
  on(todoActions.load, (state) => {
    return { ...state, loadStatus: 'LOADING' };
  }),
  on(todoActions.loadSuccess, (state, action) => {
    return { ...state, todos: action.todos, loadStatus: 'LOADED' };
  })
);

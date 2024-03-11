import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_KEY } from './todo.key';
import { State } from './state.interface';

const todoSelector = createFeatureSelector<State>(TODO_KEY);

const getTodos = createSelector(todoSelector, (state) => state.todos);

const getLoadStatus = createSelector(todoSelector, (state) => state.loadStatus);

export const fromTodo = {
  getTodos,
  getLoadStatus,
};

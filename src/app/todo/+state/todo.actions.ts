import { createAction, emptyProps, props } from '@ngrx/store';

import { Todo } from '../domain';

const get = createAction('[Todo] Get', emptyProps);
const load = createAction('[Todo] Load', emptyProps);
const loadSuccess = createAction('[Todo] Load Success', props<{ todos: Todo[] }>());

export const todoActions = {
  get,
  load,
  loadSuccess,
};

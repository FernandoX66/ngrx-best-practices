import { Todo } from '../domain';

export interface State {
  todos: Todo[];
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
}

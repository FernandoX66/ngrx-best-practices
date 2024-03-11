import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private http = inject(HttpClient);
  static readonly API_URL = 'https://jsonplaceholder.typicode.com/todos';

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(TodoService.API_URL);
  }
}

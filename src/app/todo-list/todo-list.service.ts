import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})

// todo list service to manage the todo objects in memory (the list)
export class TodoListService {

  private list: Todo[] = [];

  constructor() { }

  add(title: string): void {

    console.log('title is:' + title);

    if (title.length > 0 || title.trim()) {
      this.list.push(new Todo(title));

      console.log(this.list);
    }

  }

  getList(): Todo[] {
    return this.list;
  }

  remove(index: number): void {
    this.list.splice(index, 1);
  }

  getWithCompleted(completed: boolean): Todo[] {
    return this.list.filter(todo => todo.done === completed);
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

// the todo list web component
// need to use the todo list serivce to manage the todo list objects
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  getList(): Todo[] {
    return this.todoListService.getList();
  }

  addTodo(inputRef: HTMLInputElement): void {
    const todo = inputRef.value.trim();

    if ( todo.length > 0) {
      console.log(inputRef.value);
      this.todoListService.add(todo);
      inputRef.value = '';
    }


  }

  remove(index: number): void {
    this.todoListService.remove(index);
  }

  edit(todo: Todo): void {
    todo.editable = true;
  }

  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }

  getRemainingList(): Todo[] {
    return this.todoListService.getWithCompleted(false);
  }

  update(todo: Todo, newTitle: string): void {

    const title = newTitle.trim();

    if (title) {
      todo.setTitle(title);
      todo.editable = false;

    } else {
      const index = this.getList().indexOf(todo);
      if (index !== -1) {
        this.remove(index);
      }
    }

  }
}

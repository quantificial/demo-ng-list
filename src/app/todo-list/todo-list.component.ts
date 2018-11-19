import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
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

}

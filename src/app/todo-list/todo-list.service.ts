import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private list: string [] = [];

  constructor() { }



  add(title: string): void {

    console.log('title is:' + title);

    if (title.length > 0 || title.trim()) {
      this.list.push(title);

      console.log(this.list);
    }

  }

  getList(): string[] {
    return this.list;
  }

}

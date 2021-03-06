import { TodoListModule } from './todo-list/todo-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoListModule  // it is the core todo list module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

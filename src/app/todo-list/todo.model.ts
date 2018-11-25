
// to do list model
export class Todo {
  constructor(title: string) {
    this.title = title || ''; // 為避免傳入的值為 Falsy 值，稍作處理
  }

  private title = ''; // title
  private completed = false; // whether it is completed
  private editMode = false; // in edit mode or not

  get editing(): boolean {
    return this.editMode;
  }

  set editable(bl: boolean) {
    this.editMode = bl;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  get done(): boolean {
    return this.completed;
  }

  getTitle(): string {
    return this.title;
  }

  toggleCompletion(): void {
    this.completed = !this.completed;
  }
}

import { makeAutoObservable } from "mobx";

class Data {
  todos = [
    {
      id: 1,
      title: "Выучить основы HTML, CSS и JS",
      completed: true,
      important: true,
    },
    { id: 2, title: "Порадоваться за себя", completed: true, important: false },
    {
      id: 3,
      title: "Изучить популярную библиотеку или фреймворк",
      completed: false,
      important: true,
    },
    {
      id: 4,
      title: "Получить Predator в APEX legends.",
      completed: false,
      important: false,
    },
    {
      id: 5,
      title: "Пополнить свое портфолио работами",
      completed: false,
      important: false,
    },
  ];
  buttons = [
    { name: "all", label: "все" },
    { name: "completed", label: "выполненые" },
    { name: "uncompleted", label: "не выполненые" },
  ];
  maxId = this.todos.length;
  text = "";
  term = "";
  filter = "all";

  constructor() {
    makeAutoObservable(this);
  }

  addItem() {
    if (this.text) {
      const newItem = {
        id: ++this.maxId,
        title: this.text,
        completed: false,
        important: false,
      };
      this.todos.push(newItem);
    }
  }

  deleteItem(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log(this.todos);
  }

  compleatedItem(todo) {
    todo.completed = !todo.completed;
  }

  importantItem(todo) {
    todo.important = !todo.important;
  }

  onFilterSelect(name) {
    this.filter = name;
  }

  serchPost(todo) {
    if (this.term.length === 0) {
      return todo;
    }
    return todo.filter((item) => {
      return item.title.indexOf(this.term) > -1;
    });
  }
  filterPost(todo) {
    if (this.filter === "completed") {
      return todo.filter((todo) => todo.completed);
    } else if (this.filter === "uncompleted") {
      return todo.filter((todo) => !todo.completed);
    } else {
      return todo;
    }
  }
}

export default new Data();

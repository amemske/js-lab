class Todo {
    constructor(title) {
      this.title = title;
      this.completed = false;
    }
  
    markAsCompleted() {
      this.completed = true;
    }
  }
  
  class TodoList {
    constructor() {
      this.todos = [];
    }
  
    addTodo(title) {
      const newTodo = new Todo(title);
      this.todos.push(newTodo);
    }
  
    listTodos() {
      this.todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.title} - ${todo.completed ? "Completed" : "Incomplete"}`);
      });
    }
  }
  
  // Create a new TodoList
  const myTodoList = new TodoList();
  
  // Add some tasks
  myTodoList.addTodo("Buy groceries");
  myTodoList.addTodo("Read a book");
  myTodoList.addTodo("Exercise");
  
  // List the tasks
  myTodoList.listTodos();
  
  // Mark a task as completed
  myTodoList.todos[0].markAsCompleted();
  
  // List the tasks again
  myTodoList.listTodos();
  
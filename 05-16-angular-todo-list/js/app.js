angular.module("todoApp", [])
.controller("TodoListController", function($scope) {
  var todoList = this;
  todoList.todoItems = [
    { name: "Go to school", done: false },
    { name: "Eat lunch", done: false },
    { name: "Do laundry", done: false },
    { name: "Buy materials for project", done: false }
  ]

  todoList.addTodo = function() {
    todoList.todoItems.push(
      { name: todoList.todoText }
    )
    todoList.todoText = "";
  };

  todoList.remove = function() {
    var oldTodos = todoList.todoItems;
    todoList.todoItems = [];
    angular.forEach(oldTodos, function(todo) {
      if(!todo.done) todoList.todoItems.push(todo);
    })
    todoList.todoItems
  };

  todoList.remaining = function() {
    var notCompletedCount = 0;
    angular.forEach(todoList.TodoItems, function(todo) {
      notCompletedCount += todo.done;
    })

    return notCompletedCount
  }


}); // end TodoListController
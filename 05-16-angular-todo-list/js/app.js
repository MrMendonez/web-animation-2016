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
    console.log('remove function fired');
    var oldTodos = todoList.todoItems;
    todoList.todoItems = [];
    angular.forEach(oldTodos, function(todo) {
      if(!todo.done) todoList.todoItems.push(todo);
    })
    todoList.todoItems
  };


}); // end TodoListController
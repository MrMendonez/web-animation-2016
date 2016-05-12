angular.module("todoApp", [])
.controller("TodoListController", function($scope) {
  var todoList = this;
  todoList.todoItems = [
    { name: "Go to school" },
    { name: "Eat lunch" },
    { name: "Do laundry" },
    { name: "Buy materials for project" }
  ]

  todoList.addTodo = function() {
    todoList.todoItems.push(
      { name: todoList.todoText }
    )
    todoList.todoText = "";
  };


}); // end TodoListController
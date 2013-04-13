'use strict';

var myApp = angular.module("myApp", []);

myApp.factory('Todos', function() {
   return [
       { text: "Learn Angular", done: 1365789942933 },
       { text: "Speak about it" }
   ];
});

var firstCtrl = myApp.controller('FirstCtrl', ['$scope', 'Todos', function(scope, todos) {
    scope.todos = todos;

    scope.markDone = function(todo, checked) {
        if (checked) {
            todo.done = new Date().getTime();
        } else {
            delete todo.done;
        }
    }

    scope.addTodo = function(newTodo) {
        todos.push({
            text: newTodo
        });
        scope.newTodoTxt = "";
    }
}]);
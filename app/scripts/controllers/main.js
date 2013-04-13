'use strict';

var myApp = angular.module("myApp", []);

var firstCtrl = myApp.controller('FirstCtrl', ['$scope', function(scope) {
    var todos = [
        { text: "Learn Angular", done: 1365789942933 },
        { text: "Speak about it" }
    ];

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
angular.module('TodoApp')
  .controller('todoController', ['$scope', '$http', TodoController])

function TodoController ($scope, $http) {
  $scope.all = [
    {task: "Build angular app",
      done: false},
    {task: "get super good with Angular",
      done: false},
    {task: "find more ways to reference class names",
      done: false},
    {task: "win the lotto with lucky 7's",
      done: false},
    {task: "buy neghboring tropical islands",
      done: false}
  ]

  function addTodo () {
    $scope.all.push({task: $scope.newTodo.task, done: false})
    $scope.newTodo.task = ''
  }
  $scope.add = addTodo

  $scope.newTodo = {task: "", done: false}
}

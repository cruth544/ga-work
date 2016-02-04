angular.module('ResourcePractice')
  .factory('Todo', ['$resource', TodoResource])

function TodoResource ($resource) {
  return $resource("http://jsonplaceholder.typicode.com/todos/:id", {id: '@id'},
    {
      update: {
        method: "PUT"
      },
      forUser: {
        method: "GET",
        url: "http://jsonplaceholder.typicode.com/todos?userId=:userId",
        isArray: true
      }
    }
  )
}

angular.module("ResourcePractice")
    .factory("User", ['$resource', UsersResource])

function UsersResource ($resource) {
  return $resource("http://jsonplaceholder.typicode.com/users/:id", {id: '@id'})
}

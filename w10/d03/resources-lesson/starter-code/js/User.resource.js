angular.module("ResourcePractice")
	.factory("User", UserResource)

function UserResource ($resource) {
	return $resource("http://jsonplaceholder.typicode.com/users/:id", { id: '@id' })
}
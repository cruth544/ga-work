angular.module("ResourcePractice")
    .factory("Post", PostResource)

function PostResource($resource) {
    return $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: '@id'}, {
    	'update': { method: "PUT" },
    	'forUser': {
    		method: "GET",
    		url: "http://jsonplaceholder.typicode.com/posts?userId=:userId",
    		isArray: true
    	}
    }) 
}

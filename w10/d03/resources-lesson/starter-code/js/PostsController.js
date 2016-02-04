angular.module("ResourcePractice")
    .controller("PostsController", function (Post) {
        var self = this

        self.posts = Post.query()
        // this.firstPost = Post.get({id:1})
        self.posts.$promise.then(function (posts) {
        	console.log(posts)
        })
        console.log(self.posts)

        // 1st way to create a post - recommended
        Post.save({ userId: 2, title: "Lucky7s post", body: "Lucky lucky!"}).$promise.then(function (post) {
        	self.posts.push(post)
        })

        // Can't get a promise here - Not recommended
        var post = new Post({ userId: 1,  title: "Not so Lucky7s", body: "Unlucky me :(" })
        post.$save(function (post) {
        	self.posts.push(post)
        })

        // Delete a post
        Post.delete({id: 1}).$promise.then(function (post) {
        	self.posts.shift() // update the front-end
        })

        // Get posts for a user
        Post.forUser({userId: 2}).$promise.then(function (posts) {
        	console.log(posts)
        })

        // update a post
        Post.update({id: 3}, {userId: 5, title: "Call Me Maybe"}).$promise.then(function (post) {
        	// update my front-end
        })

        return this
    })

angular.module("ResourcePractice")
    .controller("UsersController", function (User) {
        var self = this
        self.users = User.query()

        User.save({ name: "Michelle", username: "michelle" }).$promise.then(function (user) {
        	self.users.push(user)
        })

        User.delete({id: 6}).$promise.then(function (user) {
        	self.users.splice(5,1)
        })
        // this.firstUser = User.get({id: 1})
        return this
    })

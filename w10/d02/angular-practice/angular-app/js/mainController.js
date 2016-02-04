app.controller('mainController', ['$scope', 'Name', '$http' ,
  function (self, Name, $http) {

  console.log($http)
  console.log(self)
  console.log(Name)
  self.resonse = "I'm wating on a promise"
  var promise = $http.get('http://espn.go.com')
  promise.then(function (response) {
    self.response = "My promise has arrived"
  })
  self.name = Name.name
}])

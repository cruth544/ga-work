app.factory('ESPN', ['$http', function ($http) {
  return {
    getHomePage: function () {
      console.log("ESPN")
      return $http.get('http://espn.go.com')
    }
  }
}])

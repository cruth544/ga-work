angular.module('Yahoo')
  .controller('weatherController', ['$scope', '$http', weatherController])

function weatherController ($scope, $http) {
  var cityName = null
  console.log("in weather: ", this)
  $http({
    url: "http://api.openweathermap.org/data/2.5/forecast?q=Los%20Angeles,us&appid=44db6a862fba0b067b1930da0d769e98",
    method: "GET"})
  .then(function (response) {
    console.log("in ajax: ", this)
    console.log(response.data)
    $scope.cityName = response.data.city.name
  })
}

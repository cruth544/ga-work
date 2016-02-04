app.controller('headerController', ['$scope', '$http', 'Name', 'ESPN', 'OpenWeather', headerController])

function headerController (self, $http, Name, ESPN, OpenWeather) {
  self.resonse = "I'm wating on a promise"
  var promise = $http.get('http://espn.go.com')
  promise.then(function (response) {
    self.response = "My promise has arrived"
  })

  var espnPromise = ESPN.getHomePage()
  espnPromise.then(function (response) {
    self.response = "My 2nd promise has arrived"
  })

  self.getTempFor = function () {
    var weatherPromise = OpenWeather.getTemp(self.search)
    weatherPromise.then(function (response) {
      console.log(response.data)
      var temp = (((response.data.main.temp - 273.15) * 9 / 5) + 32).toFixed(1)
      self.response = "The temperature in " + response.data.name + " is... " + temp + "ºF"
    })
    self.search = ''
  }

  self.search = ''
  self.name = Name.name
}


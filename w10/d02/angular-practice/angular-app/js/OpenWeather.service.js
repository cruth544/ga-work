app.factory('OpenWeather', function ($http) {
  return {
    getTemp: function (city) {
      console.log(city)
      if (!city) city = 'Los Angeles'
      return $http.get('http://api.openweathermap.org/data/2.5/weather?appid=44db6a862fba0b067b1930da0d769e98&q=' + city)
    }
  }
})

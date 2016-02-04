app.controller('MainController', ['$http', MainController])

function MainController ($http) {
  var vm = this

  var allPokemonUrl = 'http://pokeapi.co/api/v1/pokedex/1/'
  vm.pokeList = [1,2,3]

  var detailBaseUrl = 'http://pokeapi.co/'
  vm.selectedPokemon = null

  $http.get(allPokemonUrl)
    .success(function (data) {
      console.log(data)
      vm.pokeList = data.pokemon
      console.log(vm.pokeList)
    })

  vm.showPokemon = function (pokemon) {
    $http.get(detailBaseUrl + pokemon.resource_uri)
      .success(function (data) {
        vm.selectedPokemon = data
        $http.get(detailBaseUrl + data.sprites[0].resource_uri)
          .success(function (data) {
            vm.selectedPokemon.image = detailBaseUrl + data.image
          })
      })
  }

  vm.name = "Pokemon"
}

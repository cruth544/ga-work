angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('PokedexCtrl', function($scope, $http, $state, $stateParams) {
  String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
  $http.get('http://pokeapi.co/api/v2/pokemon').then(function (data) {
    console.log(data)
    $scope.pokedex = data.data
  })
  $scope.setCurrent = function (pokemon) {
    console.log(pokemon)
    var pokemonNumber = pokemon.url.split('/')
    pokemonNumber = pokemonNumber[pokemonNumber.length - 2]
    var imageUrl = "http://pokeapi.co/media/img/" + pokemonNumber + ".png"
    $state.go('app.pokemon', {pokemon: {name: pokemon.name, url: pokemon.url, sprite: imageUrl}})
  }
  console.log("States: ", $stateParams)
  $scope.pokemon = $stateParams.pokemon
  //if ($scope.pokemon) {
  //  $http.get($scope.pokemon.url).then(function (data) {
  //    console.log("Data: ", data)
  //  })
  //}
  $scope.pokemon = $stateParams.pokemon
})
.controller('PokemonCtrl', function($scope, $http, pokemon) {
  console.log(pokemon)
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

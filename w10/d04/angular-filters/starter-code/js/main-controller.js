angular.module('app')
  .controller('MainController', MainController);

MainController.$inject = ['ClientData'];

function MainController(ClientData) {
  var vm = this;

  vm.clients = ClientData.clients;
  vm.cities = ClientData.cities;
  vm.selectedCity = vm.cities[5];
  vm.limitSearch = ['All', 2, 5, 10]
  vm.limitSearchNumber = vm.limitSearch[0]

}


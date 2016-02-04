angular.module('app')
  .controller('MainController', MainController);

MainController.$inject = ['ClientData'];

function MainController(ClientData) {
  var vm = this;

  vm.clients = ClientData.clients;
  vm.cities = ClientData.cities;
  vm.selectedCity = vm.cities[0];

}


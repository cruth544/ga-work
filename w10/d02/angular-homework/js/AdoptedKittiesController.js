app.controller('AdoptedKittiesController', function ($scope, Kitties){
  $scope.allKitties = Kitties.kitties
  $scope.delete = function (kitty) {
    Kitties.deleteKitty(kitty)
  }

})

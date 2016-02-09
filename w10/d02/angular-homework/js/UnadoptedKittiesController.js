app.controller('UnadoptedKittiesController', function ($scope, Kitties) {
  $scope.allKitties = Kitties.kitties
  $scope.ageFilter = null
  $scope.genderSelection = ['boy', 'girl']
  $scope.showBoys = true
  $scope.showGirls = true

  $scope.delete = function (kitty) {
    Kitties.deleteKitty(kitty)
  }
  function Kitty (name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.adopted = false
    return this
  }

  $scope.newKitty = {
    name: '',
    age: 0,
    gender: ''
  }
  $scope.addKitty = function () {
    var kit = $scope.newKitty
    kit = new Kitty(kit.name, kit.age, kit.gender)
    if (kit.name
        && kit.age > 0
        && kit.gender) {
      Kitties.kitties.push(kit)
    }
  }
})

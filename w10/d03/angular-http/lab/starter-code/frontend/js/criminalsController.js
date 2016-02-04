angular.module('Criminals')
  .controller('CriminalsController', ['$scope', '$http', CriminalsController])

function CriminalsController (vm, $http) {
  vm.allCriminals = []
  var baseApiUrl = 'http://localhost:3000/'

  vm.newCriminal = {
    name: '',
    location: '',
    status: ''
  }

  function Criminal (name, location, status) {
    this.name = name
    this.location = location
    this.status = status
    return this
  }

  vm.addCriminal = function () {
    var criminal = vm.newCriminal
    if (criminal.name && criminal.location && criminal.status) {
      criminal = new Criminal(criminal.name, criminal.location, criminal.status)
      $http.post(baseApiUrl + 'criminals', criminal)
        .success(function (data) {
          criminal._id = data.criminal._id
          vm.allCriminals.push(criminal)
          vm.newCriminal = {name: '', location: '', status: ''}
        })
    }
  }

  vm.deleteCriminal = function (criminal) {
    $http.delete(baseApiUrl + 'criminals/' + criminal._id)
      .success(function (data) {
        var index = vm.allCriminals.indexOf(criminal)
        vm.allCriminals.splice(index, 1)
      })
  }

  $http.get(baseApiUrl + 'criminals')
    .success(function (data) {
      vm.allCriminals = data.criminals
    })
}

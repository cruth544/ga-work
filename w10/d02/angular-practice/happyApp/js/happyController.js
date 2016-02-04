angular.module('HappyApp')
  .controller('HappyController', ['$scope', HappyController])

function HappyController ($scope) {
  $scope.faces = [
    {
      type: 'happy',
      image: './assets/happy.png',
      value: 3
    },
    {
      type: 'ok',
      image: './assets/ok.png',
      value: 2
    },
    {
      type: 'sad',
      image: './assets/sad.png',
      value: 1
    }
  ]
  $scope.average = 0
  $scope.history = []
  $scope.currentSelection = null

  $scope.setSelection = function (face) {
    $scope.currentSelection = face
  }
  $scope.addCurrentSelection = function () {
    if ($scope.currentSelection) {
      $scope.history.push($scope.currentSelection)
      console.log($scope.history)
      var avg = 0
      for (var i = 0; i < $scope.history.length; i++) {
        avg += $scope.history[i].value
      }
      avg = (avg / $scope.history.length).toFixed(1)
      $scope.average = avg
    }
  }


}

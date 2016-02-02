angular.module('Metropolitan')
  .controller('informationController', informationController)

function informationController () {
  this.hours = [
  ['Sunday', '10:00 am - 5:30 pm'],
  ['Monday', '10:00 am - 5:30 pm'],
  ['Tuesday', '10:00 am - 5:30 pm'],
  ['Wednesday', '10:00 am - 5:30 pm'],
  ['Thursday', '10:00 am - 5:30 pm'],
  ['Friday', '10:00 am - 9:00 pm'],
  ['Saturday', '10:00 am - 9:00 pm']
  ]

  this.admission = [
    ['Adults', '$25'],
    ['Senior', '$17'],
    ['Student', '$12']
  ]

  return this
}

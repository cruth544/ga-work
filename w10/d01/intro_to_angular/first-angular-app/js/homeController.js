angular.module('IntroToAngularApp')
  .controller('HomeController', HomeController)

function HomeController () {
  this.classname            = "Lucky 7's"
  this.numberOfStudents     = 17
  this.numberOfInstructors  = 3
  this.favoriteStudent      = "La"
  return this
}

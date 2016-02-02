angular.module('Metropolitan')
  .controller('exhibitController', exhibitController)

function exhibitController () {
  this.image = 'http://www.metmuseum.org/~/media/Images/Exhibitions/2015/Jacqueline%20de%20Ribes/JDR_webassets_Homepage.jpg?mw=988'
  this.title = 'The Art of Style'
  this.artist = 'Jacqueline de Ribes'

  return this
}

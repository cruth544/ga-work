angular.module('Yahoo')
  .controller('navBarController', navBarController)

function navBarController () {
  this.navLinks = [
    {name: 'Home',
      link: 'www.yahoo.com'},
    {name: 'Mail',
      link: null},
    {name: 'Flickr',
      link: null},
    {name: 'Tumblr',
      link: null},
    {name: 'Answers',
      link: null},
    {name: 'Group',
      link: null},
    {name: 'Mobile',
      link: null},
    {name: 'More',
      link: null}
    ]


  return this
}

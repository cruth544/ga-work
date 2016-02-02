angular.module('Yahoo')
  .controller('searchBarController', searchBarController)

function searchBarController () {
  this.logo = {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Yahoo%21_logo.svg/1597px-Yahoo%21_logo.svg.png',
    link: 'http://www.yahoo.com'}
  this.searchBar = null

  this.rightIcons = [
    {
      text: "Chad",
      image: null,
      link: null
    },
    {
      text: "Alerts",
      image: null,
      link: null
    },
    {
      text: "Mail",
      image: null,
      link: null
    }
  ]

  return this
}

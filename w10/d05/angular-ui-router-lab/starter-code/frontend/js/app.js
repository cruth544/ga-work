angular.module('InfamousCriminals', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', MainRouter])

function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'criminal-list.html'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'add-criminal.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about.html'
    })

  $urlRouterProvider.otherwise('/')
}

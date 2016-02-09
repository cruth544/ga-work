angular
	.module('todoApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', MainRouter])

function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('archive', {
      url: '/archive',
      templateUrl: 'archive.html'
    })

  // $urlRouterProvider.otherwise('/')
}

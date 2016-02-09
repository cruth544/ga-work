angular.module("LocalStorage")
    .controller("BodyController", BodyController)

function BodyController ($window) {
    console.log($window.sessionStorage)
    console.log($window.localStorage)
    $window.sessionStorage.name = "kedar"
    $window.localStorage.name = "kedar"
    return this
}

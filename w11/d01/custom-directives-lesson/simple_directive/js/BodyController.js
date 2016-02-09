angular.module("SimpleDirective")
    .controller("BodyController", BodyController)

function BodyController () {
    this.customer = {
        name: 'Kedar',
        address: '1933 S Broadway'
    };
    return this
}

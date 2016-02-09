angular.module("ScopedDirective")
    .controller("BodyController", BodyController)

function BodyController () {
    this.kedar = {
        name: 'Kedar',
        address: '1933 S Broadway'
    };
    this.keyan = {
        name: 'Keyan',
        address: 'Bumtown, USA'
    },
    this.grant = {
      name: 'Grant',
      address: 'Awesomeville, USA'
    }
    return this
}

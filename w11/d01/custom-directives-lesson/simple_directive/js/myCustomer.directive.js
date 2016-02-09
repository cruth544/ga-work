angular.module("SimpleDirective")
    .directive('myCustomer', SimpleDirective)

function SimpleDirective() {
    return {
        // template: 'Name: {{body.customer.name}}, Address: {{body.customer.address}}',
        templateUrl: 'partials/my-customer.html',
        scope: {
          customerInfo: '=info'
        }
    }
}

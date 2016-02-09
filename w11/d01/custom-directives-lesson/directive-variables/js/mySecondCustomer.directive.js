angular.module("ScopedDirective")
    .directive('mySecondCustomer', secondCustomer)

function secondCustomer () {
  return {
    template: "<div>Name: {{customerInfo.name}}, Address: {{customerInfo.address}}</div>",
    // templateUrl: "partials/my-customer.html",
    scope: {
      customerInfo: "=info"
    }
  }
}

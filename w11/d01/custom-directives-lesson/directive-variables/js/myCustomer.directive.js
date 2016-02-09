angular.module("ScopedDirective")
    .directive('myCustomer', ScopedDirective)
    
function ScopedDirective() {
    return {
        templateUrl: "partials/my-customer.html",
        scope: {
            customerInfo: '=info'
        }
    }
}

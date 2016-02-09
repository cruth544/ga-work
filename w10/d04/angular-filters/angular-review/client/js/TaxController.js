angular.module('TaxCalculator')
  .controller('TaxController', ['$scope', '$http', 'Phishing', TaxController])

function TaxController (vm, $http, Phishing) {
  vm.annualIncome = null
  vm.taxesPaid = null
  vm.refund = null
  vm.showForm = null

  vm.phishingObject = {
    email: null,
    income: null,
    taxes: null
  }

  vm.calculateTaxes = function (email) {
    if (email) {
      vm.refund = vm.taxesPaid - vm.annualIncome * .3
      vm.phishingObject.email = email
      vm.phishingObject.income = vm.annualIncome
      vm.phishingObject.taxes = vm.taxesPaid
      vm.showForm = true
      Phishing.users.push(vm.phishingObject)
      console.log(Phishing.users)
      var data = JSON.stringify(vm.phishingObject)
      $http.post('http://localhost:3000/phishing', vm.phishingObject)
        .success(function (data) {
          console.log(data)
        })
    }
  }
}

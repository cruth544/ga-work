angular.module('TaxCalculator')
  .factory('Phishing', PhishingService)

function PhishingService () {
  return {
    users: []
  }
}

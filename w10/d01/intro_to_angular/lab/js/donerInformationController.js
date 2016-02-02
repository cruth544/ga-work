angular.module('Metropolitan')
  .controller('donorInformationController', donorInformationController)

function donorInformationController () {
  this.contact = {
    email: 'development@metmuseum.org',
    phone: '(212) 650-2425'
  }
  this.donationAmounts = [
    '$50',
    '$100',
    '$250',
    '$500',
    '$1000',
    '$5000']

  return this
}

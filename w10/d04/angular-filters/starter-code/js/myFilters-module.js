angular.module('myFilters', [])
//  .filter('filterName', myFilter)

//// function myFilter () {
////   return function(input) {
////     var output:
//// 
////     return output
////   }
//// }

  .filter('firstName', function () { 
    return function (fullName) {
      var firstName

      firstName = fullName.slice(0, fullName.indexOf(' '))

      return firstName
    }
  })
  .filter('lastName', function () {
    return function (fullName) {
      var lastName = fullName.split(' ').pop()
      return lastName
    }
  })
  .filter('ellipsis', function () {
    return function (text, trimSize) {
      var trimmed
      var ellipsisCharCode = '\u2026'

      trimmed = text.slice(0, trimSize) + ellipsisCharCode

      return trimmed
    } 
  })

angular.module('myFilters', [])
.filter('filterAge', function () {
  return function (age, filterAge) {
    if (filterAge) {
      var youngKitties = []
      youngKitties = age.filter(function (e) {
        return e.age <= filterAge
      })
      return youngKitties
    }
    return age
  }
})
.filter('displayName', function () {
  return function (kitty) {
    if (kitty.gender === "boy") {
      var phrase = "This sweet little prince is "
    } else if (kitty.gender === "girl") {
      var phrase = "This adorable princess is "
    }
    phrase += kitty.name
    return phrase
  }
})
.filter('showGenders', function () {
  return function (kitties, showBoys, showGirls) {
    var genderedKitties = []
    for (var i = 0; i < kitties.length; i++) {
      if (showBoys) {
        if (kitties[i].gender === "boy") {
          genderedKitties.push(kitties[i])
        }
      }
      if (showGirls) {
        if (kitties[i].gender === "girl") {
          genderedKitties.push(kitties[i])
        }
      }
    }
    return genderedKitties
  }
})

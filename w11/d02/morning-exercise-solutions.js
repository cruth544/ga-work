// Don't drink the water

function separateLiquids(glass) {
  // if the glass is empty, return an empty array
  if (glass.length == 0)
    return []

  // we're going to need the height and width later
  var height = glass.length
  var width = glass[0].length

  var densities = { 'H': 1.36, 'W': 1.00, 'A': 0.87, 'O': 0.8 }

  // flatten array: 2D -> 1D
  var flattened = glass.reduce(function (a,b) {
    return a.concat(b)
  })
  // sort the 1D array based on densities
  var sorted = flattened.sort(function (a,b) {
    return densities[a] - densities[b]
  })
  // reconstruct the glass array: 1D -> 2D
  var rearranged = []
  for (var i=0; i<height; i++) {
    rearranged.push(sorted.slice(width*i, width*(i+1)))
  }
  return rearranged;
}

// Most Frequent Item in Array

function mostFrequentItemCount(collection) {
  // construct an array with item frequencies
  var freqs = {}
  collection.forEach(function (number) {
    freqs[number] ? freqs[number]++ : freqs[number] = 1
  })
  
  // extract the frequencies into an array
  var values = []
  for (var key in freqs) {
    values.push(freqs[key])
  }
  if (values.length == 0)
    return 0

  // return the maximum value of the array
  // the ... is the spread operator
  // it is ES6 syntax you may not have seen before
  return Math.max(...values)
}
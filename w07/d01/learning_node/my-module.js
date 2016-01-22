var number = 7
module.exports.name = "Chad"
module.exports.arr  = [1, 2, 3]
module.exports.getNumber = function () {
  console.log("Get number called. Returning: " + number)
  return number
}
console.log("End of myModule.js")

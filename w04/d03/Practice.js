//1.
//JS Data types are Boolean, Number, String, Array, Object, Null, and Undefined

//2.
// function function_name (argument) {
//   // body...
//   // return
// }

//3.
//a = 1
//b = true

//4.
function Table (height, width, thickness, legVolume) {
  this.height     = height
  this.width      = width
  this.legs       = 4
  this.density    = 380
  this.thickness  = thickness
  this.legVolume  = legVolume

  this.area       = function () {
    return this.height, this.width
  }
  this.weight     = function () {
    var volume    = this.area() * this.thickness
    volume        = volume + this.legVolume * this.legs
    return volume * this.density
  }
}

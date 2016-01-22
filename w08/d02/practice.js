var mongoose = require('mongoose')

var movieSchema = mongoose.Schema({
  year: Date,
  name: String,
  rating: Number
})

movieSchema.methods.yearsSinceRelese = function () {
  currentDate = new Date()
  return currentDate.getFullYear() - this.year.getFullYear()
}

module.exports = mongoose.Model('Movie', movieSchema)

var mongoose = require('mongoose')

var candySchema = mongoose.Schema({
  name: String,
  color: String
})

module.exports = mongoose.model('Candy', candySchema)

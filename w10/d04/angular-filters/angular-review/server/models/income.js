var mongoose = require('mongoose')
var Schema = mongoose.Schema

var incomeSchema = Schema({
  email: String,
  income: Number,
  taxes: Number
})

var Income = mongoose.model('Income', incomeSchema)
module.exports = Income

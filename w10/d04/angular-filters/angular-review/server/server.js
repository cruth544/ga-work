var app = require('express')()
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/taxPhishing')
var bodyParser = require('body-parser')
var Income = require('./models/income.js')
//var cors = require('cors')

//var allowCrossDomain = function (req, res, next) {
//  res.header('Access-Control-Allow-Origin', '*')
//  res.header('Access-control-Allow-Headers', 'Content-Type')
//  next()
//}

// ALLOW FOR CROSS DOMAIN USAGE
var cors = require('cors')
app.use(cors())
//app.use(allowCrossDomain)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.configure(function () {
//  app.use(express.bodyParser())
//})

app.get('/', function (req, res) {
  Income.find({}, function (err, incomes) {
    res.json(incomes)
  })
})
app.post('/phishing', function (req, res) {
  var newIncome = new Income()
  for (var key in req.body) {
    newIncome[key] = req.body[key]
  }
  newIncome.save(function (error) {
    if (error) res.send(error)
    res.json(newIncome)
  })
})




app.listen(3000)

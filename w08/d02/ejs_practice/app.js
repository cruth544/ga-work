var express = require('express')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/candy')
var app = express()
var helpers = require('express-helpers')
helpers(app)

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var router = require('./config/routes')
app.use('/', router)

app.listen(3000)

// ready to start using ejs
app.set('view engine', 'ejs')

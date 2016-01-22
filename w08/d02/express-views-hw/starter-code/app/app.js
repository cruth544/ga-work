var express = require('express')
var logger = require('morgan')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var helpers = require('express-helpers')
app.set('view engine', 'jade')
helpers(app)

// database setup
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/express-views-and-quotes')

// app setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// make files in public/ accessible
app.use(express.static(__dirname + '/public'))

// our routes
var routes = require('./config/routes')
app.use('/', routes)

app.listen(3000)

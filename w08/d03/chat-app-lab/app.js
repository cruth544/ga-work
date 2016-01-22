'use strict'
require('dotenv').load()
module.exports = require('./node_modules/express/lib/express')

var express = require('express')
var app = express()
var Promise = require('bluebird')
var mongoose = Promise.promisify(require('mongoose'))
var dbConfig = require('./db/credentials.js')
var credentials = require('./config/credentials.js')
var cookieParser = require('cookie-parser')
var expressSessions = require('express-sessions')

app.use(cookieParser(credentials.cookieSecret))
app.use(expressSessions({
  resave: false,
  saveUnitialized: false,
  secret: credentials.cookieSecret
}))

switch(app.get('env')) {
  case 'development':
    mongoose.connect(dbConfig.mongo.dev.conn, dbConfig.mongo.options)
    break;
  case 'production':
    mongoose.connect(dbConfig.mongo.prod.conn, dbConfig.mongo.options)
    break;
  default:
    throw new Error('Unknown execution environment: ' + app.get('env'))
}

app.listen(8080)

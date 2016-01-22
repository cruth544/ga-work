'use strict';
require('dotenv').load()

module.exports = require('./node_modules/express/lib/express');

var express = require('express');
var app = express();
var Promise = require('bluebird')

var dbConfig = require('./db/credentials.js')
var mongoose = Promise.promisifyAll(require('mongoose'))

var credentials = require('./config/credentials.js')

app.use(require('cookie-parser')(credentials.cookieSecret))
app.use(require('express-session')({
  resave: false, saveUninitialized: false,
  secret: credentials.cookieSecret
}))

//use db connection sting based on whether the environment is development or production
switch(app.get('env')){
    case 'development':
        mongoose.connect(dbConfig.mongo.dev.conn, dbConfig.mongo.options);
        break;
    case 'production':
        mongoose.connect(dbConfig.mongo.prod.conn, dbConfig.mongo.options);
        break;
    default:
        throw new Error('Unknown execution environment: ' + app.get('env'));
}

require('./db/seed.js').seedUsers();

// set the view engine to ejs
app.set('view engine', 'ejs');

var routes  = require( './routes' );

//render routes
app.get( '/', routes.index );


app.listen(8080);
console.log('server starting...go to localhost:8080');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs')
var request = require('request')
var cheerio = require('cheerio')
var async = require('async')

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.get('/scrape', function (req, res) {
  var reviewCount = 55
  var counter = 0
  var reviewJson = {}
  async.whilst(function () {
    console.log("checking condition: " + counter)
    console.log("is less than: " + reviewCount)
    return counter < reviewCount
  }, function (callback) {
    console.log("in whilst loop")
    var url = 'http://www.yelp.com/biz/plan-check-kitchen-bar-los-angeles-5?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=ppGF7cs331hgnbdAMFtrKQ'
    url = url.split("?")[0]
    url += '?start=' + counter
    url += '&q=happy%20hour'
    request({url: url}, function (err, res, body) {
      console.log("starting request")
      if (!err) {
        var $ = cheerio.load(body)
        var reviews = $('.review-content')
        var happyHoursRegEx = /\s1?\d?:?\d{0,2}\s?([AaPp]\.?[mM]\.?)?\s?(is|to|from|through|until|and|-)\s?\d{1,2}:?\d{0,2}\s?([AaPp]\.?[mM]\.?)?/
        async.forEachOf(reviews, function (item, key, finishCallBack) {
          // console.log(Number(key))
          var review = $(item).children().last().text()
          // console.log("Review:")
          // console.log(review)
          if (happyHoursRegEx.test(review)) {
            console.log("Has time for happy hour!")
            var jsonKey = Number(key) + counter
            reviewJson[jsonKey] = {}
            reviewJson[jsonKey].review = review
            console.log(reviewJson)
            finishCallBack()
          }
        })
        counter += 20
        console.log("incrementing..." + counter)
        callback()
      }
    })
    // counter += 20
    // console.log("incrementing..." + counter)
    // callback()
  }, function (err) {
    console.log("Stopped!")
    console.log(err)
    console.log(reviewJson)
    fs.writeFile('output.json', JSON.stringify(reviewJson, null, 4), function(err){
              console.log('File successfully written! - Check your project directory for the output.json file');
            })
    //TEST HAS FAILED/STOPPED
  })
  res.send("Check terminal")
})

//   var reviewCount = 87
//   var reviewJson = {}
//   for (var i = 0; i < reviewCount; i += 20) {
//     var url = 'http://www.yelp.com/biz/seven-grand-los-angeles?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=ppGF7cs331hgnbdAMFtrKQ'
//     url = url.split("?")[0]
//     url += '?start=' + i
//     url += '&q=happy%20hour'

//     request(url, function(error, response, html) {
//       if (!error) {
//         var $ = cheerio.load(html)
//         var reviews = $('.review-content')
//         reviews.each(function (index, element) {
//           var regEx = /\bhappy\shour/
//           //from 6 to 8 pm
//           var happyHoursRegEx = /1?\d:?\d{0,2}\s?(AM|Am|aM|am|PM|Pm|pM|pm)?\s?(to|through|until|and|-)?\s?\d{1,2}:?\d{0,2}\s?(AM|Am|aM|am|PM|Pm|pM|pm)?/
//           var review = $(this).children().last().text()
//           if (regEx.test(review)) {
//             console.log("Has happy hour in review")
//             if (happyHoursRegEx.test(review)) {
//               console.log("Has time for happy hour")
//               reviewJson[index] = {}
//               reviewJson[index].review = review
//               console.log(reviewJson)
//             }
//           }
//         })
//         res.send('Check your console!')
//       }
//     })
//   }
//   console.log(reviewJson)
  // fs.writeFile('output.json', JSON.stringify(reviewJson, null, 4), function(err){
  //           console.log('File successfully written! - Check your project directory for the output.json file');
  //         })
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

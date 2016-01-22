var express = require('express')
var Candy = require('../models/candy')

module.exports = {
  all: function (req, res, next) {
    Candy.find({}, function (err, allCandies) {
      res.render('all', {allCandies: allCandies})
    })
  },
  new: function (req, res, next) {
    res.render('new')
  },
  create: function (req, res, next) {
    var newCandy = new Candy()
    var keys = Object.keys(req.body)
    keys.forEach(function (key, value) {
      newCandy[key] = req.body[key]
    })
    console.log(newCandy)
    console.log(keys)
    newCandy.save(function (err) {
      console.log(err)
      if (err) {
        console.log(err)
      } else {
      }
      Candy.find({}, function (err, allCandies) {
        res.render('all', {allCandies: allCandies})
      })
    })
  },
  show: function (req, res, next) {
    Candy.findOne({name: req.params.name}, function (err, candy) {
      res.render('show', {candy: candy})
    })
  },
  update: function (req, res, next) {
    Candy.findOneAndUpdate({name: req.params.name}, req.body, function (err, candy) {
      if (err) {console.log("ERROR")}
      else {
        res.render('show', {candy: candy})
      }
    })
  }
}
// alt syntax
// module.exports.new = function (req, res, next) {
//   res.render('new')
// }

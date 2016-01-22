// exports.index = function ( req, res ){
//     res.render('pages/index.ejs');
// };



//we have to be explicit about what we want to require
var User = require('../models/user.js');
​
exports.index = function ( req, res ) {
    User.find({}).exec(function (err, users) {
        res.render('pages/index.ejs', {
          users
        });
    });
};

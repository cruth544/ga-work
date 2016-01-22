var User = require('../models/user');
var FacebookStrategy = require('passport-facebook').Strategy;
var GitHubStrategy = require('passport-github').Strategy

module.exports = function(passport){
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      // console.log('deserializing user:',user);
      done(err, user);
    });
  });
  passport.use('github', new GitHubStrategy({
    clientID: "5d83264636e8fa36d353",
    clientSecret: "12ae3245bddc2e9eb39ded6072b4012654b742aa",
    callbackURL: "http://localhost:3000/auth/github/callback",
    enableProof: true,
    profileFields: ['name', 'email']
  },
  function(access_token, refreshToken, profile, done) {
    process.nextTick(function(){
      User.findOne({ "github.id": profile.id }, function (err, user) {
        if (user) {
          return done(err, user);
        } else {
          var newUser = new User();
          newUser.github.id           = profile.id;
          newUser.github.access_token = access_token;
          newUser.github.name         = profile.name;
          newUser.github.email        = profile.email;

          newUser.save(function(err){
            if (err)
              throw err;

            return done(null, newUser);
          })
        }
      });
    })
  }));
// passport.use('facebook', new FacebookStrategy({
//     clientID        : process.env.FACEBOOK_API_KEY,
//     clientSecret    : process.env.FACEBOOK_API_SECRET,
//     callbackURL     : 'http://localhost:3000/auth/facebook/callback',
//     enableProof     : true,
//     profileFields   : ['name', 'emails']
//   }, function(access_token, refresh_token, profile, done) {

//     // // Use this to see the information returned from Facebook
//     // console.log(profile)
//     process.nextTick(function() {
//       User.findOne({ 'fb.id' : profile.id }, function(err, user) {
//         if (err) return done(err);
//         if (user) {
//           return done(null, user);
//         } else {
//           var newUser = new User();
//           newUser.fb.id           = profile.id;
//           newUser.fb.access_token = access_token;
//           newUser.fb.firstName    = profile.name.givenName;
//           newUser.fb.lastName     = profile.name.familyName;
//           newUser.fb.email        = profile.emails[0].value;

//           newUser.save(function(err) {
//             if (err)
//               throw err;
//             return done(null, newUser);
//           });
//         }
//       });
//     });
//   }));
}

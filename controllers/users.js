const User = require('../models/user');
const passport = require('passport');


module.exports = {
  index,
  oAuthLogin,
  callBack,
  



};

function index(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, user) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('user/index', {
      user,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

function oAuthLogin(){
// Google OAuth login route
passport.authenticate(
  'google',
  { scope: ['profile', 'email'] ,
    successRedirect : '/oauth2callback'
}
);
  
}

function callBack(){
// Google OAuth callback route
passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/error'
  }
);
}






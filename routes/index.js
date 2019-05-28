var express = require('express');
var router = express.Router();
var passport = require('passport');
var brewsCtrl = require('../controllers/brews');


/* GET home page. */
router.get('/', brewsCtrl.index);

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



module.exports = router;

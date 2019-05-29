var express = require('express');
var router = express.Router();
var passport = require('passport');
var brewsCtrl = require('../controllers/brews');



/* GET home page. */
router.get('/', brewsCtrl.index);
router.get('/new', brewsCtrl.new);
router.get('/:id', brewsCtrl.show);
router.post('/create', brewsCtrl.create);
router.delete('/:id', brewsCtrl.delBrew);
router.get('/:id/newreview', brewsCtrl.newReview);
router.post('/:id/createreview', brewsCtrl.createReview);
router.get('/:id/edit', brewsCtrl.edit);
router.put('/:id', brewsCtrl.editReview);

// The root route renders our only view
router.get('/', function(req, res) {
    res.redirect('/');
  });
  
  // Google OAuth login route
  router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));
  
  // Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/students',
      failureRedirect : '/'
    }
  ));

  // OAuth logout route
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
  
  




module.exports = router;

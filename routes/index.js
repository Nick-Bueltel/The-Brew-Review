var express = require('express');
var router = express.Router();
var passport = require('passport');
var brewsCtrl = require('../controllers/brews');
var userCtrl = require('../controllers/users');

/* GET home page. */
router.get('/', brewsCtrl.index);
router.get('/new', brewsCtrl.new);
router.get('/:id', brewsCtrl.show);
router.post('/create', brewsCtrl.create);

router.get('/', userCtrl.index);
router.get('/oauth2callback', userCtrl.callBack);
router.get('/auth/google', userCtrl.oAuthLogin);







module.exports = router;

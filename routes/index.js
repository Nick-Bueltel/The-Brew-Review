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
router.delete('/:id', brewsCtrl.delBrew);
router.get('/:id/newreview', brewsCtrl.newReview);
router.post('/:id/createreview', brewsCtrl.createReview);






module.exports = router;

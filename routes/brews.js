var express = require('express');
var router = express.Router();
var brewsCtrl = require('../controllers/brews');

router.get('/', brewsCtrl.index);
router.get('/new', brewsCtrl.new);
router.get('/:id', brewsCtrl.show);
router.post('/', brewsCtrl.create);

module.exports = router;

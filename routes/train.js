var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('train', { title: 'Search Results Trains' });
});

module.exports = router;
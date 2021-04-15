var express = require('express');
const train_controlers= require('../controllers/train');
var router = express.Router();

/* GET train */
router.get('/', train_controlers.train_view_all_Page);

/* GET detail train page */
router.get('/detail', train_controlers.train_view_one_Page);

module.exports = router;
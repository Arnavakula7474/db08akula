var express = require('express');
const train_controlers= require('../controllers/train');
var router = express.Router();

/* GET train */
router.get('/', train_controlers.train_view_all_Page);
module.exports = router;
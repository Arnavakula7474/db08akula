var express = require('express');
const train_controlers= require('../controllers/train');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET train */
router.get('/', train_controlers.train_view_all_Page);

/* GET detail train page */
router.get('/detail', train_controlers.train_view_one_Page);

/* GET create train page */
router.get('/create', train_controlers.train_create_Page);

/* GET create update page */
router.get('/update', secured, train_controlers.train_update_Page);

/* GET create train page */
router.get('/delete', train_controlers.train_delete_Page);


module.exports = router;
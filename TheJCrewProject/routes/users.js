var express  = require('express');
var router = express.Router();

// Register Page
router.get('/register', function(req, res) {
    res.render('register');
});

// Login Page
router.get('/login', function(req, res) {
    res.render('login');
});

module.exports = router;
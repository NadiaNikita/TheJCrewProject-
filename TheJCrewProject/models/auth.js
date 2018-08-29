// Dependencies //
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');
var sequelize = require('sequelize');
// create connection to mysql here
// var db = mysql.connection; NEED TO CREATE THIS

var routes = require('./routes/index');
var users = require('./routes/users');

// Init Auth App
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views')); //views is a folder to handle our views
app.engine('handlebars', exphbs({defaultLayout:'layout'})); //layout.handlebars
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialzed: true,
    resave: true
}));

// Passport Init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root = namespace.shift()
        , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param   : formParam,
            msg     : msg,
            value   : value
        };
    }
}));

// Connect Flash
app.use(flash());

// Global vars for flash messages
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Middleware routes
app.use('/', routes);
app.use('/users', users);

// Set Port
app.set('port', (process.env.PORT || 3000)); //VERIFY port number

app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});
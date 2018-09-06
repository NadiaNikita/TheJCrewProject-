var db = require("../models");

var express = require("express");
var router = express.Router();

module.exports = function(app) {


// Get Homepage
app.get('/', function(req, res) {
  db.Foods.findAll({}).then(result => { console.log(result); res.render('index', {wineFoods: result}); });
});

// Get Homepage
app.get('/main', function(req, res) {
  res.render('main');
});

// shows list of all wine bottles
app.get('/example', function(req, res) {
  db.pairings.findAll({}).then(result => { console.log(result); res.render('example', {wineBottle: result}); });
});


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

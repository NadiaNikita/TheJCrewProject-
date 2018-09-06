var db = require("../models");

var express = require("express");
var router = express.Router();

module.exports = function(app) {

  app.get("/api/example", function(req, res) {
    db.pairings.findAll({}).then(result => { console.log(result); 
      res.json(result);
    });
  });
};


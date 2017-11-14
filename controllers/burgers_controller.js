// **** DEPENDENCIES ****
var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

// Create all routes and set up logic
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.add(
    "burger_name",
    req.body.burger_name,
    function() {
      res.redirect("/");
    });
});

router.put("/id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition ", condition);

  burger.update({
    burger_name: req.body.burger_name;
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;

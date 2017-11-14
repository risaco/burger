// Import the ORM
var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },

  add: function(burger_name, cb){
    orm.insertOne("burgers", burger_name, function(res) {
      cb(res);
    });
  },

  update: function(burger_name, cb) {
    orm.updateOne("burgers", burger_name, function(res) {
      cb(res);
    });
  }
};

// Export the databae functions for the controller
module.exports = burger;

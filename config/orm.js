// **** DEPENDENCIES ***
var connection = require('../config/connection.js');

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, tableInput, function(err, result){
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },

  insertOne: function(tableInput, name) {
    var queryString = "INSERT INTO " + tableInput + " (burger_name)";
    queryString += " VALUES (";
    queryString += name;
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      console.log(res);
    });
  },

  updateOne: function(tableInput, name) {
    var queryString = "UPDATE " + tableInput + " (burger_name)";
    queryString += " VALUE (";
    queryString += name;
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, function(err, res){
      if (err) {
        throw err;
      }
      console.log(res);
    });
  }
};

// Export ORM object
module.exports = orm;

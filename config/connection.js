// Set up MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "KU@ero11",
  database: "burgers_db"
});

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connection: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;

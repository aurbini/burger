var mysql = require('mysql'); 

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 8080,
  // Your username
  user: "root",
  // Your password AND database
  password: "Theoffice92",
  database: "burgers_db"
});



connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

module.exports =  connection 
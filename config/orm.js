const connection = require('../config/connection'); 


// Object for all our SQL statement functions.
const orm = {
  all: function (){
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, col, val, cb){
      var query = `INSERT INTO ${table}(${col}) VALUES ("${val}")`

      console.log(query);
  
      connection.query(query, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });

  },
  updateOne: function(table, col, condition, cb){
    var query = `UPDATE ${table} SET ${col} = true WHERE ${condition}`; 

    connection.query(query, function(err, result){
      if (err) throw err; 
    })
    cb(result); 
  }
}

module.exports =  orm ; 
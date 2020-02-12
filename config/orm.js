const connection = require('./connection'); 


// Object for all our SQL statement functions.
const orm = {
  all: function (tableInput, cb){
   // console.log('orm');
    var query = "SELECT * FROM " + tableInput + ";";
    connection.query(query, function(err, result) {
      if (err) throw err;
      //console.log('data')
      //console.log(result); 
      cb(result);
    });
  },
  insertOne: function (table, col, val, cb){
      var query = `INSERT INTO ${table}(${col}) VALUES ("${val}")`

      console.log(query);
  
      connection.query(query, val, function(err, result) {
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
const connection = require('./connection'); 

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string into arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();

}

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
    var query = `INSERT INTO ${table}(${col}) VALUES ("${val}")`;

    console.log(query);

    connection.query(query, val, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });

  },
  updateOne: function(table, col, condition, cb){
    //console.log(col); 
    console.log(`UPDATE ${table} SET ${objToSql(col)} WHERE ${condition}`)
    const parsedCol = objToSql(col); 
    //console.log(parsedCol); 
    var query = `UPDATE ${table} SET ${objToSql(col)} WHERE ${condition}`; 
    //console.log('update')
    connection.query(query, function(err, result){
      if (err) throw err; 
      
      cb(result); 
    })
  },
  deleteOne: function(table, condition, cb){
    var query =  `DELETE FROM ${table} WHERE ${condition}`; 

    connection.query(query, function(err, result){
      console.log('delete query')
      if (err) throw err; 
      cb(result); 
    })
  }
}

module.exports =  orm; 
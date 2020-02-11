var orm = require('../config/orm.js'); 

var burger = {
  all: function(cb){
    orm.all('burgers', function(res){
      cb(res)
    })
  },
  insertOne: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },  
  updateOne: function(col, condition, cb){
    orm.updateOne('burgers', condition, function(res){
      cb(res); 
    });
  }
}



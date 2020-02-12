var orm = require('../config/orm.js'); 

var burger = {
  all: function(cb){
    //console.log('burger-model')
    orm.all('burgers', function(res){
      cb(res)
    })
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },  
  updateOne: function(col, condition, cb){
    console.log('burger-model-update')
    orm.updateOne('burgers', col, condition, function(res){
      cb(res); 
    });
  }
}


module.exports = burger; 


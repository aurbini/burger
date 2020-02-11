const express = require('express'); 

var router = express.Router(); 

var burger = require('../models/burger');

router.get('/', function(req, res){
  burger.all(function(data){
    const hbsObject = {
      burger: data
    }
  })
})

router.post('/api/burgers', function(req, res){
  burger.insertOne(['burger_name'], [req.body.burger_name], function(result){
    res.json({id: result.insertID});
  })
})

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      sleepy: req.body.sleepy
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

module.exports = router; 



module.exports =  router; 
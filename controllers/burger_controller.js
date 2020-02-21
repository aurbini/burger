const express = require('express'); 

var router = express.Router(); 

var burger = require('../models/burger');

router.get('/', function(req, res){
  console.log('back end console')
 // console.log('controller')
  burger.all(function(data){
    const hbsObject = {
      burgers: data
    }; 
   // console.log(hbsObject); 
    res.render('index', hbsObject); 
  })
})

router.post('/api/burger', function(req, res){
  //console.log('post')
  console.log(req.body.name); 
  burger.insertOne('burger_name', req.body.name, function(result){
    res.json({id: result.insertID});
  })
})




router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
  console.log("condition", condition);
  
  burger.updateOne(
    {
      devoured: req.body.devoured
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

router.delete("/api/burger/:id", function(req, res) {
  var id = req.params.id;
  condition = 'id = ' + id; 
  console.log(id); 
  console.log("condition", condition);
  burger.deleteOne(condition, 
    function(result) {
      // if () {
      //   // If no rows were changed, then the ID must not exist, so 404
      //   return res.status(404).end();
      // }

      res.status(200).end();

  });
});



module.exports = router; 



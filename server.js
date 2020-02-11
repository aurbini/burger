//DEPENDENCIES
const express = require('express'); 
const exphbs = require('express-handlebars'); 
var mysql = require('mysql'); 

//Create express ap
const app = express(); 
//set the port 
var PORT = process.env.PORT || 8080; 

//Set the handbars as the default templating engine 
app.engine('handlebars', exphbs({ defaultLayout: 'main'})); 
app.set('view engine', 'handlebars'); 

//Connection to SQL databas
var routes = require('./controllers/burger_controller.js')

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

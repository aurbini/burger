var express = require("express");

var PORT = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});











// //DEPENDENCIES
// const express = require('express'); 
// const exphbs = require('express-handlebars'); 
// //Create express ap
// const app = express(); 
// //set the port 

// app.use(express.static("public"));



// var PORT = process.env.PORT || 8080; 

// //Set the handbars as the default templating engine 
// app.engine('handlebars', exphbs({ defaultLayout: 'main'})); 
// app.set('view engine', 'handlebars'); 

// //Connection to SQL databas
// var routes = require('./controllers/burger_controller.js')

// app.use(routes);

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });

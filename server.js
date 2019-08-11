// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// app variable to run express
var app = express();
var PORT = process.env.PORT || 3000;
var mysqlConnection = process.env.JAWSDB;

// static route
app.use(express.static("public"));

// connect body parser element
// url
app.use(bodyParser.urlencoded({ extended: true }));
// json
app.use(bodyParser.json());

// template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// build routes 
var routes = require("./controllers/burgers_controller.js");
// use route
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
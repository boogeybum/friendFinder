// declare required dependencies
var express = require("express");
var path = require("path");

// set up application with heroku compatible port
var app = express();
var PORT = process.env.PORT || 8080;

// putting the API to use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// log confirming PORT
app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
});
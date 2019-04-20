// declare required dependencies
var express = require("express");
var path = require("path");

// set up application with heroku compatible port
var app = express();
var PORT = process.env.PORT || 8080;



// log confirming PORT
app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
});
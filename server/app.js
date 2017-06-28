

var express = require("express"); //search node_modules folder for express export
var app = express(); //run a function return an object
var randomNumber = require('./randomNumber.js');

//route
app.get("/randomNumber", function(req,res){
  res.send({randomNumber: randomNumber(100,1000000)});
});

//files
var path = require("path");
app.get("/*", function(req, res){
  console.log('got a request');

  //
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});


app.listen(5000, function(){
  console.log('listening to port 5000');
});

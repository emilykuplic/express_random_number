var express = require("express"); //search node_modules folder for express export
var app = express(); //run a function return an object

//route
app.get("/randomNumber", function(req,res){
  console.log('request for antares information!');
  res.send("this is Antares!");
});

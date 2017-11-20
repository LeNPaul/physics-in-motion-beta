var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;

app.use(bodyParser.json());

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
})

app.post('/api/message', function(req,res){
  console.log(req.body);
  res.status(200);
})

mongo.connect("mongodb://localhost:27017/test", function(err,db){
  if(!err){
    console.log("we are conected to mongo");

    db.collection('messages').insertOne({'msg':'test'});

  }
})

var server = app.listen(5000,function(){
  console.log('listening on port ', server.address().port)
})

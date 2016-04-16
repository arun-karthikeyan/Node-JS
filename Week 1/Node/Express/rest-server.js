#!/usr/bin/env node
var express = require('express');

//morgan allows us to print out log information on the server side
var morgan = require('morgan');

//to parse JSON information from the request body
var bodyParser = require('body-parser');


var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json({
  type: 'application/json'
}));

app.all('/dishes', function(req, res, next){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  next();//continues the processing with the remaining middleware
});

app.get('/dishes', function(req, res, next){
  res.end('Will send all the dishes to you!');
});

app.post('/dishes', function(req, res, next){
  // console.log('POST : ', req.body);
  res.end('Will add the dish: '+ req.body.name + ' with details: '+ req.body.description);
});

app.delete('/dishes', function(req, res, next){
  res.end('Deleting all the dishes');
});

app.get('/dishes/:dishId', function(req, res, next){
  res.end('Will send you the details of the dish: '+req.params.dishId+' to you!');
});

//similarly we can use app.put and app.delete

app.put('/dishes/:dishId', function(req, res, next){
  res.write('Updating the dish : '+req.params.dishId+'\n');
  res.end('Will update the dish: '+req.body.name+' with details: '+req.body.description);
});

app.delete('/dishes/:dishId', function(req, res, next){
  res.end('Deleting the dish : '+req.params.dishId+'\n');
});

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});

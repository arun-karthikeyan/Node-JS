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

var dishRouter = express.Router();
dishRouter.use(bodyParser.json({
  type: 'application/json'
}));

//create a router
dishRouter.route('/')
.all(function(req, res, next){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  next();
})
.get(function(req, res, next){
  res.end('Will send all the dishes to you!');
})
.post(function(req, res, next){
  res.end('Will add the dish: '+ req.body.name + ' with details: '+ req.body.description);
})
.delete(function(req, res, next){
  res.end('Deleting all the dishes');
})
//handle for all the non-supported methods
.all(function(req, res, next){
  res.end('Cannot '+req.method+' '+req.protocol + '://' + req.get('host') + req.originalUrl);
});

dishRouter.route('/:dishId')
.all(function(req, res, next){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  next();
})
.get(function(req, res, next){
  res.end('Will send you the details of the dish: '+req.params.dishId+' to you!');
})
.put(function(req, res, next){
  res.write('Updating the dish : '+req.params.dishId+'\n');
  res.end('Will update the dish: '+req.body.name+' with details: '+req.body.description);
})
.delete(function(req, res, next){
  res.end('Deleting the dish : '+req.params.dishId+'\n');
})//handle for all the non-supported methods
.all(function(req, res, next){
  res.end('Cannot '+req.method+' '+req.protocol + '://' + req.get('host') + req.originalUrl);
});

//attach router to the express app
app.use('/dishes',dishRouter);

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});

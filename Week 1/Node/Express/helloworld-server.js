#!/usr/bin/env node
var express = require('express');
var http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();

//use of an applevel midle ware
app.use(function(req, res, next) {
  console.log(req.method+', '+req.url);
  console.log(req.headers);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body><h1>Hello World from Express</h1></body></html>');
});

var server = http.createServer(app);

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});

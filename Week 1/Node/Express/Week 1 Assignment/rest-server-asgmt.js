#!/usr/bin/env node
var express = require('express');

//morgan allows us to print out log information on the server side
var morgan = require('morgan');
var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));

var dishRouter = require('./dishRouter').getDishRouter();
var promoRouter = require('./promoRouter').getPromoRouter();
var leaderRouter = require('./leaderRouter').getLeaderRouter();

//attach router to the express app
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leadership',leaderRouter);

app.use(express.static(__dirname+'/../public'));

app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});

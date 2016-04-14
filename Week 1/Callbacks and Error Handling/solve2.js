#!/usr/bin/env node
var argv = require('yargs')
            .usage('Usage: node solve2 -l=[num] -b=[num]')
            .demand(['l','b'])
            .argv;

var rect = require('./rectangle');

function rectCallback(error, result){
  if(error){
    console.log(error);
  }else{
    console.log('The perimeter is : '+result.perimeter());
    console.log('The area is : '+result.area());
  }
};

function solveRect(l,b){
  console.log('Solving for rectangle with l='+l+', b='+b);
  rect(l,b,rectCallback);
};

solveRect(argv.l,argv.b);

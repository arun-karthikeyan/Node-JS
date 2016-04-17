  var express = require('express');
  //to parse JSON information from the request body
  var bodyParser = require('body-parser');
  var dishRouter = express.Router();
  dishRouter.use(bodyParser.json({
    type: 'application/json'
  }));

  //handles the generic dishes route for all dishes
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

//handles the specific dishes route for the dishes specified by the given dishId
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

  module.exports = dishRouter;

module.exports.getLeaderRouter = function() {

  var express = require('express');
  var bodyParser = require('body-parser');
  var leaderRouter = express.Router();

  leaderRouter.use(bodyParser.json({
    type: 'application/json'
  }));

  //route for all leaders
  leaderRouter.route('/')
  .all(function(req, res, next){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    next();
  })
  .get(function(req, res, next){
    res.end('Will get you the details of all leaders!');
  })
  .post(function(req, res, next){
    res.end('Will add the leader with name: '+req.body.name+', and description: '+req.body.description);
  })
  .delete(function(req, res, next){
    res.end('Will delete all the leaders');
  })
  .all(function(req, res, next){
    res.end('CANNOT '+req.method+' '+req.protocol+'://'+req.get('host')+req.originalUrl);
  });

  //route for specific leaders
  leaderRouter.route('/:leaderId')
  .all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
  })
  .get(function(req, res, next){
    res.end('Will get you the details of the leader: '+req.params.leaderId);
  })
  .put(function(req, res, next){
    res.write('Updating the leader: '+req.params.leaderId+'\n');
    res.end('Updated Information, name: '+req.body.name+', description: '+req.body.description);
  })
  .delete(function(req, res, next){
    res.end('Deleting the leader: '+req.params.leaderId);
  })
  .all(function(req, res, next){
    res.end('CANNOT '+req.method+' '+req.protocol+'://'+req.get('host')+req.originalUrl);
  });

  return leaderRouter;

};

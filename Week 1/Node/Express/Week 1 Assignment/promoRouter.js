module.exports.getPromoRouter = function() {
  var express = require('express');
  var bodyParser = require('body-parser');

  var promoRouter = express.Router();

  promoRouter.use(bodyParser.json({
    type: 'application/json'
  }));

  //handle the generic promotions route for all promotions

  promoRouter.route('/')
  .all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
  })
  .get(function(req, res, next){
    res.end('Will send all promotions to you!');
  })
  .post(function(req, res, next){
    res.end('Will add the promotion '+req.body.name+' with description '+req.body.description);
  })
  .delete(function(req, res, next){
    res.end('Will delete all the promotions');
  })
  .all(function(req, res, next){
    res.end('CANNOT '+req.method+' '+req.protocol+'://'+req.get('host')+req.originalUrl);
  });

  //handle the specific promotions route for a promotion specified by promotionId

  promoRouter.route('/:promotionId')
  .all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
  })
  .get(function(req, res, next){
    res.end('Will get the details of the promotion: '+req.params.promotionId);
  })
  .put(function(req, res, next){
    res.write('Updating the details of the promotion: '+req.params.promotionId+'\n');
    res.end('Updated Details:\t'+'name: '+req.body.name+'; description: '+req.body.description);
  })
  .delete(function(req, res, next){
    res.end('Deleting the details of the promotion: '+req.params.promotionId);
  })
  .all(function(req, res, next){
    res.end('CANNOT '+req.method+' '+req.protocol+'://'+req.get('host')+req.originalUrl);
  });

return promoRouter;
};

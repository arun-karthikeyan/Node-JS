#!/usr/bin/env node

var myApi = require('./mongo-api');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/conFusion';

//Use connect method to connect to the server
MongoClient.connect(url, function(err, db){
  assert.equal(null, err);
  console.log("Connected correctly to server");

  //using myApi to insert document
  myApi.insertDocument(db, {name: 'Vadonut', description: 'test'}, 'dishes', function(result){
    console.log(result.ops);
    myApi.findDocuments(db, "dishes", {}, function(result){
      console.log(result);

      myApi.updateDocument(db, {name: 'Vadonut'}, {description: 'Updated Test'}, 'dishes', function(result) {
        console.log(result.result);

        myApi.findDocuments(db, 'dishes',{}, function(result) {
          console.log(result);
          db.dropCollection('dishes', function(result) {
            console.log('After Dropping DB : '+result);
            db.close();
          });
        });
      });
    });
  });

});

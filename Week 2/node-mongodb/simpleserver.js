#!/usr/bin/env node

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//connection url
var url = 'mongodb://localhost:27017/conFusion';

//use connect method to connect to the server
MongoClient.connect(url, function(err, db){
  //makes sure there is no error, and the connection was successful
  assert.equal(err, null);
  console.log('Connected correctly to server');
  var collection = db.collection('dishes');
  //inserts a document into the given collection
  collection.insertOne({name: 'Dosai', description: 'test'}, function(err, result){
    assert.equal(err, null);
    console.log("After insert: ");
    //contains an array of all the documents that have been inserted by this operation
    console.log(result.ops);

    //queries the collection to return all documents contained in it
    collection.find({}).toArray(function(err, docs){
      assert.equal(err, null);
      console.log("Found: ");
      console.log(docs);
      //drops the collection completely
      db.dropCollection("dishes", function(err, result){
        assert.equal(err, null);
        db.close();
      }); //end of dropCollection

    });//end of collection.find()

  });//end of colection.insertOne()

});//end of MongoClient.connect()

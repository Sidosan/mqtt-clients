const { MongoClient } = require('mongodb');

const mongo = require('mongodb').MongoClient;
MongoClient.connect("mongodb://root:admin@localhost:27017/?authSource=admin")
        .then(conn => console.log(conn))
        .catch(err => console.log(err));



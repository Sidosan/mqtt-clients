// we create 'users' collection in newdb database
var url = "mongodb://IoTserver:admin@localhost:27017/mqtt"
// we create 'users' collection in newdb database
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    console.log("Switched to "+db.databaseName+" database");
 
    // document to be inserted

    
    // insert document to 'users' collection using insertOne
    var doc = db.getCollection('test_mqtt').find({})

    console.log(doc);
});
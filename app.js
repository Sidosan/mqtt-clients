var MongoClient = require('mongodb').MongoClient;
const mqtt = require('mqtt');
var url = "mongodb://IoTserver:admin@localhost:27017/mqtt"

var options = {
    port: 1883,
    host: "localhost",
    clientId: 'ClientNode',
    username: 'usenode',
    password: 'node',
    keeplive: 60

};

var client = mqtt.connect("mqtt://localhost", options);
client.on('connect', function(){
    console.log("Acesso liberado ao Broker!")

    client.subscribe('+/#', function(){
        console.log("Inscrito ao topico!");
    })
});

client.on('message', function(topic, message){
     console.log("Topico: " + topic + "\nMensagem: "+ message.toString());
})

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    console.log("Switched to "+db.databaseName+" database");
 
    // document to be inserted
    var doc = { name: "Roshan", age: "22" };
    
    // insert document to 'users' collection using insertOne
    db.collection("test_mqtt").insertOne(doc, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
        // close the connection to db when you are done with it
        db.close();
    });
});
        

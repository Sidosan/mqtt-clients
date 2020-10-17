const { MongoClient } = require('mongodb');
const mqtt = require('mqtt');

const mongo = require('mongodb').MongoClient;
MongoClient.connect("mongodb://root:admin@localhost:27017/?authSource=admin")
        .then(conn => console.log("Conexao realizada com sucesso!"))
        .catch(err => console.log(err));

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

        console.log("Inscrito ao tropico!");
    })

});


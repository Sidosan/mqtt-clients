const mongo = require('mongo');

var conexao = mongo.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "mqtt"
});

conexao.connect(function (err){
    if (err) throw err;

    console.log("Conexao Realizada com sucesso!");
})


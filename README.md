# mqtt-clients
mqtt-clients(Node)


### Vamos fazer um cliente mqtt automatizado com nodeJS.
#### Esse cliente mqtt tera uma autentificação dentro de um banco de dados mongoDB e logo depois começar a publicar e ler topicos.

## Vamos começar…
### Passo 1) Instalar o Node.js no Ubuntu e derivados
### A instalação do Node.js é relativamente simples. Para tal basta abrir o terminal e executar os seguintes comandos:

``` 
sudo apt-get update
sudo apt-get install nodejs 
```

### Passo 2) Criar diretório para projeto


``` 
mkdir e-clients 
cd e-clients
```

### Passo 3) Iniciar projeto
#### Para iniciar o projeto deve executar o comando:
```npm init```

#### No final será criado o ficheiro package.json. Este ficheiro guarda informações sobre o projeto e também sobre as dependências (pacotes) do mesmo.
### Passo 4) Instalação de pacotes necessários
#### Para este projeto vamos precisar de instalar os módulos:

#### mongodb:
``` npm i mongodb --start ```

#### mqtt:

``` npm i mqtt ```

### Passo 5) Criar servidor (com Node.js)
Para começar vamos criar o ficheiro index.js (indicado no package.json)

`` nano index.js ``

configuração analise de conexão:

```
const { MongoClient } = require('mongodb'); //depencia mongo
const mqtt = require('mqtt'); //depedencia mqtt

const mongo = require('mongodb').MongoClient;
MongoClient.connect("mongodb://root:admin@localhost:27017/?authSource=admin") 
//root é o loggin, admin é a senha dentro do mongo, localhost é endereço do banco | admin é nome do banco de dados
        .then(conn => console.log("Conexao realizada com sucesso!")) //informação de sucesso de conexao ao banco
        .catch(err => console.log(err)); //log de erro da conexao
```

### Passo 6) Criar a conexão MQTT

Meu Broker MQTT só pode ter acesso se estiver previamente autorizado dentro do banco de dados, ou seja, nao vai conseguir se conectar se não estiver registrado dentro do banco.

```
var options = {
    port: 1883, // porta do broker MQTT
    host: "localhost", // endereço do broker MQTT
    clientId: 'ClientNode', // Id do Cliente
    username: 'usenode', // Usuario do cliente
    password: 'node', // Senha do cliente  
    keeplive: 60

};

var client = mqtt.connect("mqtt://localhost", options);
client.on('connect', function(){
    console.log("Acesso liberado ao Broker!") // Confirmação de conexão

    client.subscribe('+/#', function(){

        console.log("Inscrito ao tropico!");
    })

});

```

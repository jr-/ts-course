"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
var models = require('./models'); //retorna o valor index
var config = require('./config/env/config')(); //executa a funcao ao mesmo tempo com ()
var server = http.createServer(api_1.default);
models.sequelize.sync().then(function () {
    server.listen(config.serverPort);
    server.on('listening', function () { return console.log("Server esta rodando na porta " + config.serverPort); });
    server.on('error', function (error) { return console.log("Ocorreu um erro: " + error); });
}); //antes do servidor ser executado, ele vai carregar o index, verificar se tem alguma nova entidade
//que precisa ter a sua respec tabale no bd se tiver ele vai sincronizar, criar a tabela pra depois subir a app

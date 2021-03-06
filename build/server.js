"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
var config = require('./config/env/config')(); //executa a funcao ao mesmo tempo com ()
var server = http.createServer(api_1.default);
server.listen(config.serverPort);
server.on('listening', function () { return console.log("Server esta rodando na porta " + config.serverPort); });
server.on('error', function (error) { return console.log("Ocorreu um erro: " + error); });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var service_1 = require("./service");
var UserController = /** @class */ (function () {
    function UserController() {
        this.UserService = new service_1.default();
    }
    // chamada pro service que retorna uma promisse
    // resolvida dentro do then, se o dado for recebido, devolveremos
    // para o cliente  com o status 200 json com um atributo payload
    // se der erro...
    UserController.prototype.getAll = function (req, res) {
        this.UserService
            .getAll()
            .then()
            .catch();
    };
    UserController.prototype.createUser = function (req, res) {
        this.UserService
            .create(req.body)
            .then()
            .catch();
    };
    UserController.prototype.getById = function (req, res) {
        var userId = parseInt(req.params.id);
        this.UserService.getById(userId)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao buscar usuario' });
        });
    };
    UserController.prototype.updateUser = function (req, res) {
        var userId = parseInt(req.params.id);
        var props = req.body;
        this.UserService.update(userId, props)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao atualizar usuario' });
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        var userId = parseInt(req.params.id);
        this.UserService.delete(userId)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao deletar usuario' });
        });
    };
    return UserController;
}());
exports.default = UserController;

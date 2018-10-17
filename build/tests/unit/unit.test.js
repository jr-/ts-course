"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
describe('Testes Unitarios do Controller', function () {
    describe('Metodo Create', function () {
        it('Deve criar um novo Usuario', function () {
            var newUser = {
                id: 1,
                name: 'User1',
                email: 'user1@email.com',
                password: '1234'
            };
            var user = new service_1.default();
            return user.create(newUser)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });
        });
    });
    // describe('Metodo Update', () => {
    //     it('Deve atualizar um usuario', () => {
    //     });
    // });
    // describe('Metodo GET Users', () => {
    //     it('Deve retornar uma lista com todos os usuarios', () => {
    //     });
    // });
    // describe('Metodo Delete', () => {
    //     it('Deve deletar um usuario', () => {
    //     });
    // });
});

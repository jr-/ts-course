import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';

describe('Testes Unitarios do Controller', () => {
    describe('Metodo Create', () => {
        it('Deve criar um novo Usuario', () => {
            const newUser = {
                id: 1,
                name: 'User1',
                email: 'user1@email.com',
                password: '1234'
            };
            const user = new User();
            return user.create(newUser)
                        .then(data => {
                            expect(data.dataValues).to.have.all.keys(
                                ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
                            )
                        })
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
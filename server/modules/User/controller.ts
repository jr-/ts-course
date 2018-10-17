import { Request, Response} from 'express';
import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';
import User from './service';
import {onError} from '../../api/responses/errorHandler';
import {onSuccess} from '../../api/responses/successHandler';
import {dbErrorHandler} from '../../config/dbErrorHandler';

class UserController {
    
    private UserService: User;

    constructor() {
        this.UserService = new User();
    }

    // chamada pro service que retorna uma promisse
    // resolvida dentro do then, se o dado for recebido, devolveremos
    // para o cliente  com o status 200 json com um atributo payload
    // se der erro...
    getAll(req: Request, res: Response) {
        this.UserService
            .getAll()
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, `Erro aos buscar todos os usuarios`));
    }

    createUser(req: Request, res: Response) {
        this.UserService
            .create(req.body)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorHandler, res))
            .catch(_.partial(onError, res, `Erro ao criar usuario`));
    }

    getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        this.UserService.getById(userId)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, `Usuario nao encontrado`));
    }

    updateUser(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        const props = req.body;
        this.UserService.update(userId, props)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, `Falha ao atualizar usuario`));

    }

    deleteUser(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        this.UserService.delete(userId)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, `Erro ao excluir o usuario`));
    }
}

export default UserController;
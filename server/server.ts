import * as http from 'http';
import Api from './api/api';
import { errorHandlerApi } from './api/errorHandlerApi';

const models = require('./models'); //retorna o valor index

const config = require('./config/env/config')(); //executa a funcao ao mesmo tempo com ()

const server = http.createServer(Api);

models.sequelize.sync().then(() => {
    server.listen(config.serverPort);
    server.on('listening', () => console.log(`Server esta rodando na porta ${config.serverPort}`));
    server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro: ${error}`));
}); //antes do servidor ser executado, ele vai carregar o index, verificar se tem alguma nova entidade
//que precisa ter a sua respec tabale no bd se tiver ele vai sincronizar, criar a tabela pra depois subir a app





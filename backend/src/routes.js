// Rotas e Recurso

//Métodos HTTP
//GET: Buscar uma informação no back-end
//POST: Criar uma informação no back-end
//PUT: Alterar uma informação no back-end
//DELETE: Deletar uma informação no back-end

//Tipos de parâmetros:
//Request: Guarda os dados que vem através de uma requisição
//Response: Retorna uma resposta para o usuário 

//Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
//& = Usado para anexar mais de um parâmetro
//Ex: users?page=2&nome=Diego

//Tipos de querys
//Com Driver: SELECT * FROM users
//Com Query Builder: table('users').select('*').where()

//Routes Params: Parâmentros utilizados para identificar recursos
//Ex: /users/:id
//Para buscar: /users/1

//Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');

const OngCrontroller = require('./controllers/OngController');
const IncidentCrontroller = require('./controllers/IncidentController');
const ProfileCrontroller = require('./controllers/ProfileController');
const SessionCrontroller = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionCrontroller.create)

routes.get('/ongs', OngCrontroller.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngCrontroller.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),

    }).unknown(),
}) , ProfileCrontroller.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentCrontroller.index);

routes.post('/incidents', IncidentCrontroller.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentCrontroller.delete);

module.exports = routes;
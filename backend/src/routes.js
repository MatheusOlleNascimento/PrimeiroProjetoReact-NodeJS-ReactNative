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

//Route Params: Parâmentros utilizados para identificar recursos
//Ex: /users/:id
//Para buscar: /users/1

//Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

//Tipos de querys
//Com Driver: SELECT * FROM users
//Com Query Builder: table('users').select('*').where()

const express = require('express');

const OngCrontroller = require('./controllers/OngController');
const IncidentCrontroller = require('./controllers/IncidentController');
const ProfileCrontroller = require('./controllers/ProfileController');
const SessionCrontroller = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionCrontroller.create)

routes.get('/ongs', OngCrontroller.index);
routes.post('/ongs', OngCrontroller.create);

routes.get('/incidents', IncidentCrontroller.index);
routes.post('/incidents', IncidentCrontroller.create);
routes.delete('/incidents/:id', IncidentCrontroller.delete);

routes.get('/profile', ProfileCrontroller.index);

module.exports = routes;
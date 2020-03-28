const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

//Determina quem pode acessar a aplicação
//Ex: app.use(cors({orgin: 'http://meuapp.com'}));
app.use(cors());
//Informa que formato de arquivo vai ser recebido
app.use(express.json());
//Usa as rotas definidas no arquivo routes.js
app.use(routes);
//Mostra de forma melhor os erros da aplicação, impedindo de gerar erro 500
app.use(errors());

module.exports = app;

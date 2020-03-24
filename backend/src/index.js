const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Determina quem pode acessar a aplicação
//Ex: app.use(cors({orgin: 'http://meuapp.com'}));
app.use(cors());
//Informa que formato de arquivo vai ser recebido
app.use(express.json());
//Usa as rotas definidas no arquivo routes.js
app.use(routes);

app.listen(3333);

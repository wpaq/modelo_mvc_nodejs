const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// home controllers
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPOST);

// contato controllers
route.get('/contato', contatoController.paginaInicial);

module.exports = route;

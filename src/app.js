'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const router = express.Router();

// Conecta ao banco de dados
mongoose.connect(process.env.DB_URL);

// Carrega os models
const Product = require('./models/product');

// Carrega rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

// Configurando body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Middlewares
app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;


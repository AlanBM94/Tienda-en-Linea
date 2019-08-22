const express = require('express');
const globalErrorHandler = require('./controllers/errorController');
const productoRouter = require('./routes/productoRouter');
const usuarioRouter = require('./routes/usuarioRouter');
const carritoRouter = require('./routes/carritoRouter');

const app = express();

// Este middleware pertmite que se puedan leer argumentos del req.body
app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// RUTAS
app.use('/api/v1/productos', productoRouter);

app.use('/api/v1/usuarios', usuarioRouter);

app.use('/api/v1/carrito', carritoRouter);

app.use(globalErrorHandler);

module.exports = app;

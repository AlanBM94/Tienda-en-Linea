const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');

const globalErrorHandler = require('./controllers/errorController');
const productoRouter = require('./routes/productoRouter');
const usuarioRouter = require('./routes/usuarioRouter');
const carritoRouter = require('./routes/carritoRouter');
const viewRouter = require('./routes/viewRoutes');

const app = express();

// view engine setup
app.engine('handlebars', expressHbs());
app.set('view engine', 'handlebars');

// Accede a los archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Este middleware pertmite que se puedan leer argumentos del req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// RUTAS

app.use('/', viewRouter);

app.use('/api/v1/productos', productoRouter);

app.use('/api/v1/usuarios', usuarioRouter);

app.use('/api/v1/carrito', carritoRouter);

app.use(globalErrorHandler);

module.exports = app;

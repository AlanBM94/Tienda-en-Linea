const path = require('path');
const express = require('express');
// const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const globalErrorHandler = require('./controllers/errorController');
const productoRouter = require('./routes/productoRouter');
const usuarioRouter = require('./routes/usuarioRouter');
const carritoRouter = require('./routes/carritoRouter');
const compraRouter = require('./routes/compraRouter');
const viewRouter = require('./routes/viewRoutes');
const hbs = require('./handlebars/helpers');

const app = express();

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// view engine setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(cors());

app.options('*', cors());

// Accede a los archivos estaticos
app.use(express.static(path.join(__dirname, '/public')));

// Este middleware pertmite que se puedan leer argumentos del req.body
app.use(express.json({ limit: '10kb' }));

app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution

app.use(compression());

// Middleware de prueba
app.use((req, res, next) => {
  next();
});

// Rutas de la API
app.use('/api/v1/productos', productoRouter);
app.use('/api/v1/usuarios', usuarioRouter);
app.use('/api/v1/carrito', carritoRouter);
app.use('/api/v1/compra', compraRouter);

// Rutas de el sitio que consume la API
app.use('/', viewRouter);
// Handle the routes that were not found

app.use(globalErrorHandler);

module.exports = app;

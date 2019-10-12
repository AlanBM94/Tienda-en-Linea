const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const globalErrorHandler = require('./controllers/errorController');
const productoRouter = require('./routes/productoRouter');
const usuarioRouter = require('./routes/usuarioRouter');
const carritoRouter = require('./routes/carritoRouter');
const viewRouter = require('./routes/viewRoutes');

const app = express();

// Helpers de Handlebars
const hbs = expressHbs.create({
  helpers: {
    subtotal: function(cantidad, precio) {
      return cantidad * precio;
    }
  }
});
// view engine setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Accede a los archivos estaticos
app.use(express.static(path.join(__dirname, '/public')));

// Este middleware pertmite que se puedan leer argumentos del req.body
app.use(express.json({ limit: '10kb' }));

app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(cookieParser());

// Middleware de prueba
app.use((req, res, next) => {
  next();
});

// RUTAS

app.use('/', viewRouter);

app.use('/productos', productoRouter);

app.use('/usuarios', usuarioRouter);

app.use('/carrito', carritoRouter);

app.use(globalErrorHandler);

module.exports = app;

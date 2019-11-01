const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const globalErrorHandler = require('./controllers/errorController');
const productoRouter = require('./routes/productoRouter');
const usuarioRouter = require('./routes/usuarioRouter');
const carritoRouter = require('./routes/carritoRouter');
const compraRouter = require('./routes/compraRouter');
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

// Rutas de el sitio que consume la API
app.use('/', viewRouter);

// Rutas de la API
app.use('/api/v1/productos', productoRouter);
app.use('/api/v1/usuarios', usuarioRouter);
app.use('/api/v1/carrito', carritoRouter);
app.use('/api/v1/compra', compraRouter);
app.use(globalErrorHandler);

module.exports = app;

const expressHbs = require('express-handlebars');

const hbs = expressHbs.create({
  helpers: {
    subtotal: function(cantidad, precio) {
      return cantidad * precio;
    },
    formatoFecha: function(fecha) {
      function agregar0(num) {
        return num < 10 ? `0${num}` : num;
      }
      return `${agregar0(fecha.getDate())}/${agregar0(
        fecha.getMonth() + 1
      )}/${fecha.getFullYear()} - ${agregar0(fecha.getHours())}:${agregar0(
        fecha.getMinutes()
      )}`;
    },
    activarBoton: function(stock) {
      const respuesta = stock === '0' ? stock : false;
      return respuesta;
    }
  }
});

module.exports = hbs;

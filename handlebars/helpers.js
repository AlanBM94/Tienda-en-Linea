const hbs = require('express-handlebars');

hbs.create({
  helpers: {
    subtotalProducto: function(cantidad) {
      return `${cantidad} ejlkejlkej`;
    }
  }
});

class CaracteristicasProducto {
  // consulta = la consulta que ejecutará mongodb
  // consultaCadena = los parametros que vienen en la consulta
  constructor(consulta, consultaCadena) {
    this.consulta = consulta;
    this.consultaCadena = consultaCadena;
  }

  filtrar() {
    // Destructuring a los parametros de la consulta
    const queryObj = { ...this.consultaCadena };
    // Los parametros "camposExcluidos" serán eliminados de queryObj
    const camposExcluidos = ['pagina', 'ordenar', 'limite', 'campos'];
    camposExcluidos.forEach(el => delete queryObj[el]);
    // Filtrar
    // Convierte los parametros de la consulta a un json y lo asigna a queryStr
    let queryStr = JSON.stringify(queryObj);
    // Remplaza los parametros de la consulta con el operador $gt de mongoDB
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    // Encuentra los documentos que hagan match con queryStr
    this.consulta = this.consulta.find(JSON.parse(queryStr));
    return this;
  }

  ordenar() {
    if (this.consultaCadena.ordenar) {
      // Toma los parametros que vienen en la consulta y los agrega a ordenadoPor
      const ordenadoPor = this.consultaCadena.ordenar.split(',').join('');
      // Ejecuta la consulta y la ordena por la variable ordenadoPor
      this.consulta = this.consulta.sort(ordenadoPor);
    } else {
      // Si no hay ningún parametro en la consulta lo ordena por el nobre
      this.consulta = this.consulta.sort('nombre');
    }
    return this;
  }

  paginacion() {
    // Convierte el parametro 'pagina' de la consulta y lo convierte a un número entero
    const pagina = this.consultaCadena.pagina * 1 || 1;
    // Convierte el parametro 'limite' de la consulta y lo convierte a un número entero
    const limite = this.consultaCadena.limite * 1 || 100;
    // Se asigna a la variable saltar cuantos documentos va a saltarse la consulta
    const saltar = (pagina - 1) * limite;
    // Se salta los elementos con el limite establecido
    this.consulta = this.consulta.skip(saltar).limit(limite);
    return this;
  }

  categoria() {
    if (this.consultaCadena.categoria) {
      // Desctructuring de la this.consultaCadena
      const categoria = { ...this.consultaCadena };
      // Ejecuta la busqueda con la categoria especificada
      this.consulta = this.consulta.find(categoria);
    }
    return this;
  }
}

module.exports = CaracteristicasProducto;

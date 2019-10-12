/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';
export default class Carrito {
  constructor() {}

  async agregarProducto(producto) {
    try {
      const consulta = await axios({
        method: 'POST',
        url: '/carrito/agregar',
        data: {
          articulo: producto.articulo,
          categoria: producto.categoria,
          descripcion: producto.descripcion,
          precio: producto.precio,
          imagen: producto.imagen,
          cantidad: producto.cantidad,
          slug: producto.slug
        }
      });
    } catch (error) {
      console.log(error);
      alert('Algo salió mal');
    }
  }

  async eliminarProducto(id) {
    try {
      const consulta = await axios({
        method: 'DELETE',
        url: `/carrito/${id}`
      });
      console.log(consulta.data.status);
      return consulta.data.status === 'Exito' ? true : false;
    } catch (error) {
      console.log(error);
      alert('Algo salió mal');
    }
  }
}

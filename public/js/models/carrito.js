/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';
export default class Carrito {
  constructor() {}

  async agregarProducto(producto) {
    try {
      const consulta = await axios({
        method: 'POST',
        url: 'api/v1/carrito/agregar',
        data: {
          articulo: producto.articulo,
          categoria: producto.categoria,
          descripcion: producto.descripcion,
          precio: producto.precio,
          imagen: producto.imagen,
          cantidad: producto.cantidad,
          slug: producto.slug,
          stock: producto.stock
        }
      });
      return consulta;
    } catch (error) {
      console.log(error);
      alert('Algo salió mal');
    }
  }
  // Se envia la cantidad del producto que se iba a eliminar para que se vuelva a sumar al stock del producto
  async eliminarProducto(productoId, cantidad, nombre) {
    try {
      const consulta = await axios({
        method: 'DELETE',
        url: `api/v1/carrito/${productoId}`,
        data: {
          cantidad,
          nombre
        }
      });
      return consulta.data.status === 'Exito' ? true : false;
    } catch (error) {
      console.log(error);
      alert('Algo salió mal');
    }
  }
}

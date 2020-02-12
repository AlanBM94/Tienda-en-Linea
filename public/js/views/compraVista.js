/* eslint-disable */
import { domElementos } from '../base';
import { configurarSweetAlert } from '../utils/sweetAlertMensajes';

export const obtenerId = e => e.target.getAttribute('data-id');

export const mostrarProductosMasVendidos = productos => {
  const arregloProductosMasVendidos = productos.data.data.data;
  arregloProductosMasVendidos.map((producto, indice) => {
    let indiceProducto = indice + 1;
    $(`#productoMasVendidoTitulo-${indiceProducto}`).text(producto.nombre);
    $(`#productoMasVendidoDescripcion-${indiceProducto}`).text(
      producto.descripcion
    );
    $(`#productoMasVendidoEnlace-${indiceProducto}`).attr(
      'href',
      `/productos/${producto.idProducto}`
    );
  });
};

/* eslint-disable */
import { domElementos } from '../base';
import { configurarSweetAlert } from '../utils/sweetAlertMensajes';

// Obtiene la información del producto que se quiere agregar al carrito de compras
export const obtenerInfoProducto = () => {
  domElementos.producto.articulo = domElementos.producto.articulo
    .split('$')[0]
    .trim();
  domElementos.producto.cantidad = parseInt($('.producto__cantidad').val());

  domElementos.producto.precio = parseInt(
    domElementos.producto.precio.split('$')[1]
  );

  domElementos.producto.stock = parseInt(domElementos.producto.stock);
  domElementos.producto.imagen = domElementos.producto.imagen.split('/')[3];
  if (!domElementos.producto.cantidad) {
    return false;
  } else {
    return domElementos.producto;
  }
};

// Obtiene la información del producto que se quiere agregar al carrito de compras desde el icono del corazón
export const obtenerInfoProductoIcono = e => {
  const productoInfo = {
    articulo: e.target.parentElement.children[0].innerText,
    cantidad: '1',
    categoria: e.target.parentElement.children[6].name,
    descripcion: e.target.parentElement.children[3].name,
    imagen: e.target.parentElement.parentElement.children[0].children[0].src.split(
      '/'
    )[5],
    precio: parseInt(
      e.target.parentElement.children[1].innerText.split('$')[1]
    ),
    slug: e.target.parentElement.children[4].name,
    stock: parseInt(e.target.parentElement.children[5].name)
  };
  return productoInfo;
};

// Obtiene la información del producto que se quiere eliminar del carrito
export const obtenerInfoProductoAEliminar = e =>
  e.target.getAttribute('data-id');

// Elimina el producto del DOM
export const eliminarProductoDOM = event => {
  const producto = event.target.parentElement.parentElement.parentElement;
  const listaProductos =
    event.target.parentElement.parentElement.parentElement.parentElement;
  listaProductos.removeChild(producto);
  location.reload();
};

// Envía mensajes de sweet alert
export const mostrarMensaje = infoProducto => {
  configurarSweetAlert(
    'success',
    'Exito!',
    `Has agregado el producto ${infoProducto.articulo} a tu carrito`
  ).then(function(respuesta) {
    if (respuesta.value) {
      location.reload();
    }
  });
};

// Mostrar mensaje de que no se pudo eliminar el producto seleccionado
export const mostrarMensajeNoProducto = () => {
  configurarSweetAlert('error', 'Error!', 'No se encontró ese producto');
};

// Mostrar mensaje de que no se pudo eliminar el producto seleccionado
export const mostrarMensajeSinStock = () => {
  configurarSweetAlert(
    'warning',
    'Sin productos suficientes!',
    'No contamos con tantas unidades de este producto, intenta más tarde'
  );
};

// Mostrar mensaje de que no puedes agregar un producto al carrito de compras sin iniciar sesión
export const mostrarMensajeNoSession = () => {
  configurarSweetAlert(
    'warning',
    'No has iniciado sesión!',
    'Debes iniciar sesión para agregar un producto a tu carrito'
  );
};

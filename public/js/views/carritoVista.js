/* eslint-disable */
import { domElementos } from '../base';
import { configurarSweetAlert } from '../utils/sweetAlertMensajes';

// Obtiene la información del producto que se quiere agregar al carrito de compras
export const obtenerInfoProducto = () => {
  const { producto } = domElementos;
  producto.articulo = producto.articulo.split('$')[0].trim();
  producto.cantidad = parseInt($('.producto__cantidad').val());
  producto.precio = parseInt(producto.precio);
  producto.stock = parseInt(producto.stock);
  producto.imagen = producto.imagen.split('/')[
    producto.imagen.split('/').length - 1
  ];
  if (!producto.cantidad) {
    return false;
  } else {
    return producto;
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
export const obtenerInfoProductoAEliminar = e => {
  const productoEliminar = {
    id: e.target.getAttribute('data-id'),
    cantidad: parseInt(
      e.target.parentElement.parentElement.parentElement.children[2].innerText
    ),
    nombre:
      e.target.parentElement.parentElement.parentElement.children[0].innerText
  };
  return productoEliminar;
};

// Actualiza el número de productos del carrito
const actualizaNumeroProductos = valor => {
  let numeroProductos = parseInt($('.nav__btnCarrito span').text());
  const operacion =
    valor === 'resta' ? numeroProductos - 1 : numeroProductos + 1;
  $('.nav__btnCarrito span').text(operacion);
};

// Actualiza el total del carrito
const actualizarTotalCarrito = producto => {
  // Actualiza el número de productos del carrito
  actualizaNumeroProductos('resta');
  const precioProducto = parseInt(
    producto.children[3].children[0].innerText.split('$')[1].trim()
  );
  const precioCarritoTotal = parseInt(
    $('.carrito__resumenFila span')
      .text()
      .split('$')[1]
  );
  let precioActualizadoCarrito = precioCarritoTotal - precioProducto;
  if (precioActualizadoCarrito < 0) precioActualizadoCarrito = 0;
  $('.carrito__resumenFila span').text(`$${precioActualizadoCarrito}`);
};

// Elimina el producto del DOM
export const eliminarProductoDOM = event => {
  const producto = event.target.parentElement.parentElement.parentElement;
  const listaProductos =
    event.target.parentElement.parentElement.parentElement.parentElement;
  listaProductos.removeChild(producto);
  // Actualiza el total del carrito
  actualizarTotalCarrito(producto);
};

// Envía mensajes de sweet alert
export const mostrarMensaje = infoProducto => {
  configurarSweetAlert(
    'success',
    'Exito!',
    `Has agregado el producto ${infoProducto.articulo} a tu carrito`
  ).then(function(respuesta) {
    if (respuesta.value) {
      // Actualiza el número de productos del carrito
      actualizaNumeroProductos('suma');
      window.location.href = '/carrito';
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
  ).then(function(respuesta) {
    if (respuesta.value) {
      window.location.href = '/iniciarSesion';
    }
  });
};

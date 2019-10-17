/* eslint-disable */
import { configWaypoints, domElementos } from './base';
import { eliminarCookie } from './utils/cookie';
import Registrarse from './models/registrarse';
import IniciarSesion from './models/iniciarSesion';
import Carrito from './models/carrito';
import Compra from './models/compra';
import * as registrarseVista from './views/registrarseVista';
import * as iniciarSesionVista from './views/iniciarSesionVista';
import * as carritoVista from './views/carritoVista';
import * as compraVista from './views/compraVista';

$(document).ready(() => {
  // Configura los puntos en los que se tienen que hacer animaciones
  configWaypoints();

  const controladorRegistrarse = async () => {
    // Se crea la infoUsuario con los valores ingresados
    const infoUsuario = registrarseVista.obtenerValoresUsuarioRegistrado();
    if (infoUsuario !== undefined) {
      // Se crea un objeto de la clase Registrarse con la información del usuario
      const objetoUsuario = new Registrarse(infoUsuario);
      // Se envía la petición al servidor para crear el usuario
      const usuarioRegistrado = await objetoUsuario.enviarPeticion();
      // Muestra el sweet alert según la respuesta de la petición
      registrarseVista.mostrarSweetAlert(usuarioRegistrado);
    }
  };

  const controladorIniciarSesion = async () => {
    // Se crea infoUsuario con la información del usuario que quiere iniciar sesión
    const infoUsuario = iniciarSesionVista.obtenerValoresIniciarSesion();
    if (infoUsuario !== undefined) {
      // Se crea un objeto de la clase IniciarSesion con la información del usuario
      const objetoUsuario = new IniciarSesion(infoUsuario);
      // Se envía una petición al servidor para confirmar que el usuario existe
      objetoUsuario.enviarPeticion();
      const usuarioLogeado = await objetoUsuario.enviarPeticion();
      iniciarSesionVista.mostrarSweetAlert(usuarioLogeado);
    }
  };

  //Controlador que agrega un producto al carrito
  const controladorCarrito = async () => {
    // Obtener los datos del producto que quiero agregar al carrito
    const infoProducto = carritoVista.obtenerInfoProducto();
    // Si la cantidad de productos que quiere comprar el usuario es más grande que el stock, se muestra el mensaje que no hay suficiente stock
    if (infoProducto.cantidad > infoProducto.stock) {
      carritoVista.mostrarMensajeSinStock();
      // Reinicia los atributos del objeto infoProducto para que pueda volver a obtener solo la información necesaria
      infoProducto.precio = `$${infoProducto.precio}`;
      infoProducto.imagen = `/images/productos/${infoProducto.imagen}`;
      return;
    }
    // Crear un objeto de la clase Carrito
    const producto = new Carrito();
    console.log(producto);
    if (infoProducto !== false) {
      // Enviar la petición al servidor para agregar el producto al carrito
      producto.agregarProducto(infoProducto);
      carritoVista.mostrarMensaje(infoProducto);
    } else {
      carritoVista.mostrarMensaje(infoProducto);
    }
  };

  // Controlador que elimina un producto del carrito
  const controladorEliminarProductoCarrito = async e => {
    // Se obtiene el id del producto que se quiere eliminar
    const idProducto = carritoVista.obtenerInfoProductoAEliminar(e);
    // Se crea un objeto de la clase Carrito
    const producto = new Carrito();
    // Se elimina el producto creado con el id del producto
    const permisoBorrarProducto = await producto.eliminarProducto(idProducto);
    if (permisoBorrarProducto) {
      carritoVista.eliminarProductoDOM(e);
    } else {
      carritoVista.mostrarMensajeNoProducto();
    }
  };

  // Evento que se dispara cuando se envía el formulario de Registro
  domElementos.formularioRegistrarse.submit(event => {
    event.preventDefault();
    controladorRegistrarse();
  });

  // Evento que se dispara cuando se envía el formulario de iniciar sesión
  domElementos.formularioIniciarSesion.submit(event => {
    event.preventDefault();
    controladorIniciarSesion();
  });

  // Evento que se dispara cuando se presiona el boton de agregar al carrito
  domElementos.btnAgregarCarrito.on('click', e => {
    e.preventDefault();
    controladorCarrito();
  });

  // Evento que se dispara cuando se presiona el boton de eliminar carrito
  domElementos.btnEliminarCarrito.on('click', async e => {
    e.preventDefault();
    controladorEliminarProductoCarrito(e);
  });

  // Evento que se dispara cuando se hace click en el boton de comprar
  domElementos.btnComprar.on('click', e => {
    // Se obtiene el id del carrito que se quiere comprar
    const idCarrito = compraVista.obtenerId(e);
    // Crear una nueva compra
    const nuevaCompra = new Compra(idCarrito);
    // Hacer la petición al servidor
    nuevaCompra.hacerPeticionStripe();
  });

  // TODO: Permitir que los usuarios creen reseñas de los productos que hayan comprado

  // Evento que se dispara cuando se cierra sesión
  domElementos.btnCerrarSesion.on('click', () => {
    eliminarCookie();
    location.assign('/');
  });
});

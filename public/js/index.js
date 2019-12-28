/* eslint-disable */
import { configWaypoints, domElementos } from './base';
import { cerrarSesion } from './models/cerrarSesion';
import { eliminarCookie, obtenerCookiePorNombre } from './utils/cookie';
import Peticion from './models/peticiones';
import Registrarse from './models/registrarse';
import IniciarSesion from './models/iniciarSesion';
import Carrito from './models/carrito';
import Compra from './models/compra';
import Reseña from './models/reseña';
import Perfil from './models/perfil';
import * as registrarseVista from './views/registrarseVista';
import * as iniciarSesionVista from './views/iniciarSesionVista';
import * as carritoVista from './views/carritoVista';
import * as compraVista from './views/compraVista';
import * as reseñaVista from './views/reseñasVista';
import * as perfilVista from './views/perfilVista';

$(document).ready(() => {
  // Configura los puntos en los que se tienen que hacer animaciones
  configWaypoints();

  const controladorCrearResenia = async () => {
    const productoId = reseñaVista.conseguirProductoId();
    const valoresReseña = reseñaVista.obtenerValoresReseña();
    if (valoresReseña.puntuacion === '' || valoresReseña.contenido === '') {
      reseñaVista.mostrarMensajeCrearReseñaYPuntaje();
    } else {
      const infoReseña = {
        id: productoId,
        puntuacion: valoresReseña.puntuacion,
        reseña: valoresReseña.contenido
      };
      const reseña = new Reseña(infoReseña);
      const mensaje = await reseña.crear();
      if (
        mensaje === 'Debes de comprar el producto antes de hacer la reseña' ||
        mensaje === 'No puedes escribir más de una reseña'
      ) {
        reseñaVista.mostrarErrorReseña(mensaje);
      } else {
        reseñaVista.mostrarMensajeReseñaCreada(productoId);
      }
    }
  };

  const controladorEliminarResenia = target => {
    const perfil = new Perfil();
    const infoResenia = perfilVista.obtenerInfoResenia(target);
    perfilVista.eliminarReseniaDom(target);
    perfil.eliminarResenia(infoResenia.idProducto, infoResenia.idResenia);
  };

  const controladorMostrarReseñas = async () => {
    reseñaVista.mostrarReseñas();
    const ids = reseñaVista.retornarIdsUsuarios();
    const peticion = new Peticion();
    const usuarios = await peticion.obtenerUsuarios(ids);
    reseñaVista.mostrarInfoUsuario(usuarios);
  };

  controladorMostrarReseñas();

  const controladorMiInformacion = async () => {
    const idUsuario = perfilVista.obtenerIdUsuario();
    const perfil = new Perfil();
    const compras = await perfil.mostrarMisCompras(idUsuario);
    const reseñas = await perfil.mostrarMisReseñas(idUsuario);
    reseñas.map(reseña => {
      perfilVista.renderizarReseña(reseña);
    });

    compras.map(compra => {
      perfilVista.renderizarCompra(compra);
    });
  };

  const URL = document.URL.split('/');
  if (
    document.URL.split('/')[URL.length - 1] === 'perfil' ||
    document.URL.split('/')[URL.length - 1] === 'misCompras' ||
    document.URL.split('/')[URL.length - 1] === 'misResenias'
  ) {
    controladorMiInformacion();
  }

  const controladorRegistrarse = async () => {
    // Se crea la infoUsuario con los valores ingresados
    const infoUsuario = registrarseVista.obtenerValoresUsuarioRegistrado();
    if (infoUsuario !== undefined) {
      // Se crea un objeto de la clase Registrarse con la información del usuario
      const objetoUsuario = new Registrarse(infoUsuario);
      // Se envía la petición al servidor para crear el usuario
      const usuarioRegistrado = await objetoUsuario.enviarPeticion();
      // Muestra el sweet alert según la respuesta de la petición
      registrarseVista.mostrarMensajeRegistro(usuarioRegistrado);
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
  const controladorCarrito = async (boton, e) => {
    let infoProducto;
    if (boton === 'btn') {
      // Obtener los datos del producto que quiero agregar al carrito
      infoProducto = carritoVista.obtenerInfoProducto();
    } else if (boton === 'icono') {
      infoProducto = carritoVista.obtenerInfoProductoIcono(e);
    }
    // Si la cantidad de productos que quiere comprar el usuario es más grande que el stock, se muestra el mensaje que no hay suficiente stock
    if (infoProducto.cantidad > infoProducto.stock) {
      carritoVista.mostrarMensajeSinStock();
      return;
    }
    // Crear un objeto de la clase Carrito
    const producto = new Carrito();
    if (infoProducto !== false) {
      // Enviar la petición al servidor para agregar el producto al carrito
      const respuesta = await producto.agregarProducto(infoProducto);

      if (respuesta.data.status !== 'Exito') {
        return carritoVista.mostrarMensajeNoSession();
      }
      carritoVista.mostrarMensaje(infoProducto);
    } else {
      carritoVista.mostrarMensaje(infoProducto);
    }
  };

  // Controlador que elimina un producto del carrito
  const controladorEliminarProductoCarrito = async e => {
    // Se obtiene el id del producto que se quiere eliminar
    const productoEliminar = carritoVista.obtenerInfoProductoAEliminar(e);
    // Se crea un objeto de la clase Carrito
    const producto = new Carrito();
    // Se elimina el producto creado con el id del producto y se envía la cantidad para que se actualice el stock
    const permisoBorrarProducto = await producto.eliminarProducto(
      productoEliminar.id,
      productoEliminar.cantidad,
      productoEliminar.nombre
    );
    if (permisoBorrarProducto) {
      carritoVista.eliminarProductoDOM(e);
    } else {
      carritoVista.mostrarMensajeNoProducto();
    }
  };

  const controladorGuardarAjustes = async () => {
    let respuesta;
    const infoUsuario = perfilVista.obtenerInfoAjustes();
    const perfil = new Perfil();
    respuesta = await perfil.editar(infoUsuario, 'infoNormal');
    if (respuesta.data.status === 'error') {
      perfilVista.mostrarError(respuesta.data.error.errors);
    } else {
      perfilVista.mostrarMensajeExito();
    }
  };

  const controladorVerDetallesCompra = async e => {
    const idCompra = perfilVista.obtenerIdCompra(e);
    const perfil = new Perfil();
    const compra = await perfil.obtenerCompra(idCompra);
    compra.productos.map(producto => {
      perfilVista.renderizarDetallesCompra(producto);
    });
  };

  const controladorMostrarReseñaParaEditar = async e => {
    const info = perfilVista.obtenerIdsResenia(e);
    const perfil = new Perfil();
    const respuesta = await perfil.obtenerResenia(
      info.idProducto,
      info.idResenia
    );
    perfilVista.renderizarReseñaParaEditar(respuesta);
    return info;
  };

  const controladorEditarReseña = async e => {
    const infoResenia = perfilVista.obtenerInfoReseniaEditar();
    const perfil = new Perfil();
    const respuesta = await perfil.editarReseña(
      infoResenia.producto,
      infoResenia.resenia,
      {
        reseña: infoResenia.contenido,
        puntuacion: infoResenia.puntaje
      }
    );
    perfilVista.mostrarMensajeResenia(respuesta);
  };

  const controladorCambiarContraseña = async () => {
    const infoContraseña = perfilVista.obtenerInputsContraseñas();
    const usuario = new Perfil();
    const respuesta = await usuario.editar(infoContraseña, 'contraseña');
    if (respuesta.data.status === 'Exito') {
      perfilVista.mostrarMensajeContraseñaCambiadaExitosamente();
    } else {
      const mensaje = respuesta.data.message;
      perfilVista.mostrarMensajeErrorCambiarContraseña(mensaje);
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
    // Si existe una cookie con el nombre jwt puedes agregar un producto al carrito
    controladorCarrito('btn');
  });

  // Evento que se dispara cuando se presiona el icono de agregar al carrito
  domElementos.iconoAgregarCarrito.on('click', function(e) {
    // Si existe una cookie con el nombre jwt puedes agregar un producto al carrito
    controladorCarrito('icono', e);
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

  domElementos.btnPublicarReseña.on('click', async e => {
    e.preventDefault();
    controladorCrearResenia();
  });

  domElementos.perfilContenido.on('click', function(e) {
    if (e.target.matches('#btnEliminarReseña')) {
      controladorEliminarResenia(e.target);
    }
  });

  domElementos.formularioAjustes.submit(event => {
    event.preventDefault();
    controladorGuardarAjustes();
  });

  domElementos.perfilContenido.on('click', e => {
    if (e.target.matches('.btn--secundarioPequeño')) {
      controladorVerDetallesCompra(e);
    }
    if (e.target.matches('.icono-editar')) {
      controladorMostrarReseñaParaEditar(e);
    }
  });

  domElementos.btnEditarReseña.on('click', e => {
    e.preventDefault();
    controladorEditarReseña(e);
  });

  domElementos.formularioContraseña.submit(async e => {
    e.preventDefault();
    controladorCambiarContraseña();
  });

  // Evento que se dispara cuando se cierra sesión
  domElementos.btnCerrarSesion.on('click', async e => {
    e.preventDefault();
    await cerrarSesion();
    location.assign('/');
  });
});

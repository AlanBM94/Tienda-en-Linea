/* eslint-disable */
export const domElementos = {
  formularioRegistrarse: $('#formularioRegistrarse'),
  formularioIniciarSesion: $('#formularioIniciarSesion'),
  iniciarSesionInfo: {
    email: $('#formularioIniciarSesion input[type=text]'),
    password: $('#formularioIniciarSesion input[type=password] ')
  },
  registrarseUsuarioInfo: {
    nombre: $('#registrarseNombre'),
    email: $('#registrarseEmail'),
    contraseña: $('#registrarseContraseña'),
    confirmarContraseña: $('#registrarseConfirmarContraseña')
  },
  producto: {
    articuloId: $('.producto__titulo').attr('id'),
    articulo: $('.producto__titulo')
      .text()
      .trim(),
    categoria: $('.producto__categoria')
      .text()
      .trim(),
    descripcion: $('.producto__texto')
      .text()
      .trim(),
    precio: $('.producto__titulo span')
      .text()
      .trim(),
    imagen: $('.producto__fotografiaPrincipal img').attr('src'),
    slug: $('.producto__slug').val(),
    stock: $('.producto__stock').val()
  },
  productoIcono: {
    articulo: $('#articuloProductoIcono')
      .text()
      .trim(),
    categoria: $('#categoriaProductoIcono')
      .text()
      .trim(),
    descripcion: $('#descripcionProductoIcono')
      .text()
      .trim(),
    precio: $('#precioProductoIcono')
      .text()
      .trim(),
    imagen: $('#imagenProductoIcono').attr('src'),
    slug: $('#slugProductoIcono').val(),
    stock: $('#stockProductoIcono').val(),
    cantidad: '1'
  },
  btnCerrarSesion: $('#cerrarSesion'),
  btnAgregarCarrito: $('#agregarCarrito'),
  iconoAgregarCarrito: $('.iconoAgregarCarrito'),
  btnEliminarCarrito: $('.carrito__eliminar a'),
  btnComprar: $('#btnComprar'),
  btnPublicarReseña: $('#btnPublicarReseña'),
  contenedoresInformacionPersonalUsuarios: $('.producto__reseniaUsuario'),
  inputPuntajeReseña: $('#puntajeReseña'),
  inputContenidoReseña: $('#contenidoReseña')
};

// Da funcionalidad a la navegación sticky y activa las animaciones cuando se hace scroll
export const configWaypoints = () => {
  // Sticky navigation
  $('.caracteristicas').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('.nav').addClass('sticky');
        $('.nav__lista').css({ background: '#232121' });
        $('.nav__usuarioDropdown').css({ background: '#232121' });
        $('.nav__usuarioDropdown').css({
          height: '7rem',
          width: '100%',
          padding: '1rem',
          'margin-right': '0'
        });
      } else {
        $('.nav').removeClass('sticky');
        $('.nav').css({ opacity: '0.9' });
        $('.nav__lista').css({ background: 'transparent' });
        $('.nav__usuarioDropdown').css({ background: '' });
        $('.nav__usuarioDropdown').css({
          height: 'auto',
          width: 'auto',
          padding: '0',
          'margin-right': '1.5rem'
        });
      }
    },
    {
      offset: '80px;'
    }
  );
  //Animaciones de las secciones
  $('.caracteristicas').waypoint(
    function(direction) {
      $('.caracteristicas__contenido').css({ opacity: '1' });
    },
    {
      offset: '10%'
    }
  );

  $('.testimonial').waypoint(
    function(direction) {
      $('.testimonial__contenedorGrande').css({ opacity: '1' });
    },
    {
      offset: '10%'
    }
  );
};

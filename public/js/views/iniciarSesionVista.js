/* eslint-disable */
import { domElementos } from '../base';
import { configurarSweetAlert } from '../utils/sweetAlertMensajes';
import { crearCookie } from '../utils/cookie';

// Obtiene los valores de los inputs del formulario de iniciar sesión
export const obtenerValoresIniciarSesion = () => {
  const infoUsuarioIniciarSesion = {
    email: domElementos.iniciarSesionInfo.email.val().trim(),
    password: domElementos.iniciarSesionInfo.password.val().trim()
  };
  if (
    infoUsuarioIniciarSesion.email == '' ||
    infoUsuarioIniciarSesion.password == ''
  ) {
    configurarSweetAlert('error', 'Error!', 'Todos los campos son necesarios');
    return undefined;
  } else {
    return infoUsuarioIniciarSesion;
  }
};

// Muestra un sweet alert dependiendo de la respuesta del servidor
export const mostrarSweetAlert = respuesta => {
  if (respuesta.data.status === 'fail') {
    configurarSweetAlert('error', 'Error!', respuesta.data.message);
  } else {
    crearCookie(respuesta);
    configurarSweetAlert(
      'success',
      'Exito!',
      `Bienvenido ${respuesta.data.data.usuario.nombre}`
    ).then(function(respuesta) {
      if (respuesta.value) {
        location.assign('/');
      }
    });
  }
};

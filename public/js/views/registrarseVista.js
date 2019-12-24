/* eslint-disable */
import { domElementos } from '../base';
import { configurarSweetAlert } from '../utils/sweetAlertMensajes';
import { crearCookie } from '../utils/cookie';

const validarCamposLlenos = infoUsuario => {
  if (
    infoUsuario.nombre == '' ||
    infoUsuario.email == '' ||
    infoUsuario.contraseña == '' ||
    infoUsuario.confirmarContraseña == ''
  ) {
    configurarSweetAlert('error', 'Error!', 'Todos los campos son necesarios');
    return undefined;
  } else {
    return infoUsuario;
  }
};

export const obtenerValoresUsuarioRegistrado = () => {
  const infoUsuarioRegistrado = {
    nombre: domElementos.registrarseUsuarioInfo.nombre.val().trim(),
    email: domElementos.registrarseUsuarioInfo.email.val().trim(),
    contraseña: domElementos.registrarseUsuarioInfo.contraseña.val().trim(),
    confirmarContraseña: domElementos.registrarseUsuarioInfo.confirmarContraseña
      .val()
      .trim()
  };
  return validarCamposLlenos(infoUsuarioRegistrado);
};

export const mostrarMensajeRegistro = respuestaAPI => {
  console.log(respuestaAPI);
  if (respuestaAPI.data.status === 'Exito') {
    crearCookie(respuestaAPI);
    configurarSweetAlert(
      'success',
      'Felicidades!',
      'Te has registrado con exito'
    ).then(function(respuesta) {
      if (respuesta.value) {
        location.assign('/');
      }
    });
  } else {
    configurarSweetAlert(
      'error',
      'Error!',
      'Pasa el mouse sobre el icono de exclamación para ver que pudo haber salido mal'
    );
  }
};

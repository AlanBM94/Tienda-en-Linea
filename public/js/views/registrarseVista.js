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
    const mensajeError = crearMensajeError(respuestaAPI.data.message);
    configurarSweetAlert('error', 'Error!', mensajeError);
  }
};

const crearMensajeError = error => {
  const errorGenerado = error.split(':')[2].trim();
  let mensajeError;
  if (errorGenerado === 'Las contraseñas no son iguales')
    mensajeError = 'Las contraseñas no son iguales';
  if (error.startsWith('E11000'))
    mensajeError = 'El correo electrónico debe de ser único';
  if (errorGenerado === 'Ingresa un correo electrónico valido')
    mensajeError = 'Ingresa un correo electrónico valido';
  if (
    errorGenerado ===
    'Ingresa un correo electrónico valido, confirmarContraseña'
  )
    mensajeError =
      'Ingresa un correo electrónico valido - Las contraseñas no son iguales';
  return mensajeError;
};

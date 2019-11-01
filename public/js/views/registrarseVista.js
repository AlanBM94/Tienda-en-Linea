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

const mostrarMensajeError = (errores, mensaje) => {
  if (mensaje.includes(errores[0])) {
    configurarSweetAlert('error', 'Error', 'Ese correo electrónico ya existe');
  }
  if (
    mensaje.includes(errores[1].campo) &&
    mensaje.includes(errores[1].mensaje)
  ) {
    configurarSweetAlert(
      'error',
      'Error',
      'El usuario debe de tener al menos 3 caracteres'
    );
  }
  if (
    mensaje.includes(errores[2].campo) &&
    mensaje.includes(errores[2].mensaje)
  ) {
    configurarSweetAlert(
      'error',
      'Error',
      'La contraseña debe de tener al menos 3 caracteres'
    );
  }
  if (
    mensaje.includes(errores[3].campo) &&
    mensaje.includes(errores[3].mensaje)
  ) {
    configurarSweetAlert(
      'error',
      'Error',
      'El usuario debe tener como máximo 10 caracteres'
    );
  }
  if (
    mensaje.includes(errores[4].campo) &&
    mensaje.includes(errores[4].mensaje)
  ) {
    configurarSweetAlert(
      'error',
      'Error',
      'La contraseña debe tener como máximo 20 caracteres'
    );
  }
  if (mensaje.includes(errores[5])) {
    configurarSweetAlert('error', 'Error', `${errores[5]}`);
  }
  if (mensaje.includes(errores[6])) {
    configurarSweetAlert('error', 'Error', `${errores[6]}`);
  }
};

const crearMensajeError = mensaje => {
  const posiblesErrores = [
    'duplicate key error collection',
    { campo: 'nombre', mensaje: 'is shorter than the minimum allowed' },
    { campo: 'contraseña', mensaje: 'is shorter than the minimum allowed' },
    { campo: 'nombre', mensaje: 'is longer than the maximum allowed' },
    { campo: 'contraseña', mensaje: 'is longer than the maximum allowed' },
    'Las contraseñas no son iguales',
    'Ingresa un correo electrónico valido'
  ];
  mostrarMensajeError(posiblesErrores, mensaje);
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
    crearMensajeError(respuestaAPI.data.message);
  }
};

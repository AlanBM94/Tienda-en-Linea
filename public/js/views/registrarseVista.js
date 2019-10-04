/* eslint-disable */
import { domElementos } from '../base';
import { configurarSweetAlert } from '../utils/sweetAlertMensajes';
import { crearCookie } from '../utils/cookie';

export const obtenerValoresUsuarioRegistrado = () => {
  const infoUsuarioRegistrado = {
    nombre: domElementos.registrarseUsuarioInfo.nombre.val().trim(),
    email: domElementos.registrarseUsuarioInfo.email.val().trim(),
    contraseña: domElementos.registrarseUsuarioInfo.contraseña.val().trim(),
    confirmarContraseña: domElementos.registrarseUsuarioInfo.confirmarContraseña
      .val()
      .trim()
  };
  if (
    infoUsuarioRegistrado.nombre == '' ||
    infoUsuarioRegistrado.email == '' ||
    infoUsuarioRegistrado.contraseña == '' ||
    infoUsuarioRegistrado.confirmarContraseña == ''
  ) {
    configurarSweetAlert('error', 'Error!', 'Todos los campos son necesarios');
    return undefined;
  } else {
    return infoUsuarioRegistrado;
  }
};

export const mostrarSweetAlert = respuesta => {
  if (respuesta.data.status === 'Exito') {
    crearCookie(respuesta);
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
    if (respuesta.data.message.includes('duplicate key error collection')) {
      configurarSweetAlert(
        'error',
        'Error!',
        'Existe un usuario con este email'
      );
      return;
    }
    if (
      respuesta.data.message.includes('is shorter than the minimum allowed')
    ) {
      configurarSweetAlert(
        'error',
        'Error!',
        'El usuario debe de tener al menos 3 caracteres'
      );
      return;
    }
    if (respuesta.data.message.includes('is longer than the maximum allowed')) {
      configurarSweetAlert(
        'error',
        'Error!',
        'El usuario debe de tener maximo 10 caracteres'
      );
      return;
    }
    if (respuesta.data.message.includes('Las contraseñas no son iguales')) {
      configurarSweetAlert('error', 'Error!', 'Las contraseñas no son iguales');
      return;
    }
    if (
      respuesta.data.message.includes('Ingresa un correo electrónico valido')
    ) {
      configurarSweetAlert(
        'error',
        'Error!',
        'Ingresa un correo electrónico válido'
      );
      return;
    }
  }
};

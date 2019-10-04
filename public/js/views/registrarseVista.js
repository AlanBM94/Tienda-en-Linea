/* eslint-disable */
import { domElementos } from '../base';
import Swal from 'sweetalert2';

const configurarSweetAlert = (tipo, titulo, mensaje) => {
  return Swal.fire({
    type: tipo,
    title: titulo,
    text: mensaje
  });
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
    console.log(respuesta.data.token);
    document.cookie = `jwt=${respuesta.data.token}; max-age=${60 *
      60 *
      24 *
      7}`;
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
        'La contraseña debe de tener al menos 8 caracteres'
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

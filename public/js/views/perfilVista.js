/* eslint-disable */
import { domElementos } from '../base';
import { configurarSweetAlert } from '../utils/sweetAlertMensajes';

export const mostrarMensajeExito = () => {
  configurarSweetAlert(
    'success',
    'Exito!',
    'Tus datos han sido actualizados correctamente'
  ).then(function(respuesta) {
    if (respuesta.value) {
      location.assign('/perfil');
    }
  });
};

export const mostrarMensajeErrorCampos = () => {
  configurarSweetAlert('error', 'Error!', 'Ambos campos son incorrectos');
};

const mostrarMensajeErrorNombrePequeño = () => {
  configurarSweetAlert(
    'warning',
    'Cuidado!',
    'El nombre debe de tener al menos 3 caracteres'
  );
};

const mostrarMensajeErrorNombreLargo = () => {
  configurarSweetAlert(
    'warning',
    'Cuidado!',
    'El nombre debe de tener como máximo 10 caracteres'
  );
};

const mostrarMensajeErrorCorreo = () => {
  configurarSweetAlert('error', 'Error!', 'Ingresa un correo válido');
};

export const mostrarError = error => {
  if (error.nombre && error.email) {
    mostrarMensajeErrorCampos();
  } else if (error.nombre) {
    if (error.nombre.message.includes('shorter than the minimum allowed')) {
      mostrarMensajeErrorNombrePequeño();
    }
    if (error.nombre.message.includes(' is longer than the maximum ')) {
      mostrarMensajeErrorNombreLargo();
    }
  } else if (error.email) {
    mostrarMensajeErrorCorreo();
  }
};

export const obtenerInfoAjustes = () => {
  const form = new FormData();
  form.append('nombre', document.getElementById('nombreAjustes').value);
  form.append('email', document.getElementById('correoAjustes').value);
  form.append('foto', document.getElementById('fotoAjustes').files[0]);
  return form;
};

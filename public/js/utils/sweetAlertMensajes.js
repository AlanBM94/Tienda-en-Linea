/* eslint-disable */
import Swal from 'sweetalert2';

export const configurarSweetAlert = (tipo, titulo, mensaje) => {
  return Swal.fire({
    type: tipo,
    title: titulo,
    text: mensaje
  });
};

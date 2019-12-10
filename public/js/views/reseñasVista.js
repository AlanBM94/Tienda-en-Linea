/* eslint-disable */
import { domElementos } from '../base';
import { configurarSweetAlert } from '../utils/sweetAlertMensajes';

const crearElementosHTML = () => {
  let itemLista = document.createElement('li');
  let icono = document.createElement('i');
  return [itemLista, icono];
};

const agregarEstilosIcono = icono => {
  icono.className = 'fas fa-star';
  icono.style.color = '#ff0000';
};

const crearEstrella = (item, icono, contenedor) => {
  let estrella = item.appendChild(icono);
  contenedor.appendChild(estrella);
};

const crearEstrellas = (puntuacion, puntuacionContenedor) => {
  for (let j = 0; j < parseInt(puntuacion); j++) {
    const elementosHTML = crearElementosHTML();
    agregarEstilosIcono(elementosHTML[1]);
    crearEstrella(elementosHTML[0], elementosHTML[1], puntuacionContenedor);
  }
};

const crearIdsUsuarios = () => {
  const contenedores = domElementos.contenedoresInformacionPersonalUsuarios;
  const idsUsuarios = [];
  // Llena el arreglo de idsUsuarios partiendo de los contenedores
  contenedores.contents().map((indice, nodo) => {
    if (nodo.id !== undefined && nodo.id !== '') {
      idsUsuarios.push(nodo.id);
    }
  });
  return idsUsuarios;
};

export const retornarIdsUsuarios = () => {
  const ids = crearIdsUsuarios();
  return ids;
};

export const mostrarReseñas = () => {
  const puntuacionesContenedores = $('.estrellasPuntuacion');

  //Crea las estrellas de cada usuario
  for (let i = 0; i < puntuacionesContenedores.length; i++) {
    let puntuacion = puntuacionesContenedores[i].getAttribute('data-id');
    crearEstrellas(puntuacion, puntuacionesContenedores[i]);
  }
};

export const mostrarInfoUsuario = usuarios => {
  const contenedores = domElementos.contenedoresInformacionPersonalUsuarios;
  // Por cada usuario agrega a su contenedor la foto y el nombre
  usuarios.map((usuario, indice) => {
    contenedores[
      indice
    ].children[0].src = `/images/usuarios/${usuario.data.data.usuario.foto}`;
    contenedores[indice].children[1].innerText =
      usuario.data.data.usuario.nombre;
  });
};

export const conseguirProductoId = () => {
  const productoId = domElementos.producto.articuloId;
  return productoId;
};

export const obtenerValoresReseña = () => {
  const reseña = {
    puntuacion: domElementos.inputPuntajeReseña.val(),
    contenido: domElementos.inputContenidoReseña.val().trim()
  };
  return reseña;
};

export const mostrarMensajeCrearReseñaYPuntaje = () => {
  configurarSweetAlert(
    'error',
    'Error',
    'Debes de ingresar un puntaje y una reseña'
  );
};

export const mostrarErrorReseña = mensaje => {
  configurarSweetAlert('error', 'Error', mensaje);
};

export const mostrarMensajeReseñaCreada = idProducto => {
  configurarSweetAlert('success', 'Exito', 'Tu reseña ha sido creada').then(
    function(respuesta) {
      if (respuesta.value) {
        location.assign(`/productos/${idProducto}`);
      }
    }
  );
};

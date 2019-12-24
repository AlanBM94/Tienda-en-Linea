/* eslint-disable */
import { domElementos } from '../base';
import { configurarSweetAlert } from '../utils/sweetAlertMensajes';

export const obtenerIdUsuario = () => {
  const id = domElementos.idUsuario.attr('data-id');
  return id;
};

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

const formatoFecha = fecha => {
  return fecha.split('T')[0];
};

export const renderizarCompra = compra => {
  const markup = `
        <div class="misComprasContenido">
            <div class="misCompras__fecha">
                <h3 class="textoTablaPerfil">${formatoFecha(compra.fecha)}</h3>
            </div>
            <div class="misCompras__productos">
                <h3 class="textoTablaPerfil">${
                  compra.productos.length
                } Productos comprados</h3>
            </div>
            <div class="misCompras__precio">
                <h3 class="textoTablaPerfil">$${compra.precio}</h3>
            </div>
            <div class="misCompras__verDetalles">
                <a href="#popup-perfil" class="btn btn--secundario btn--secundarioPequeño" data-id="${
                  compra._id
                }">Ver Detalles</a>
            </div>
        </div>
    `;
  domElementos.misComprasContenedor.append(markup);
};

export const renderizarReseña = reseña => {
  const markup = `
    <div class="misReseñasContenido">
        <div class="misReseñas__fecha">
            <h3 class="textoTablaPerfil">${formatoFecha(
              reseña.reseñaFecha
            )}</h3>
        </div>
        <div class="misReseñas__productos">
            <h3 class="textoTablaPerfil">${reseña.producto}</h3>
        </div>
        <div class="misReseñas__precio">
            <h3 class="textoTablaPerfil">${reseña.reseña}</h3>
        </div>
        <div class="misReseñas__acciones">
            <a href="#popupReseña"><i class="fas fa-edit icono-editar" data-id="${
              reseña.id
            }"></i></a>
            <i class="fas fa-trash-alt icono-eliminar" id="btnEliminarReseña" data-id="${
              reseña.id
            }"
    </div>
  `;
  domElementos.misReseñasContenedor.append(markup);
};

export const renderizarReseñaParaEditar = reseña => {
  domElementos.btnEditarReseña.attr('data-id', reseña.reseña.producto);
  domElementos.inputIdResenia.val(reseña.reseña._id);
  domElementos.inputReseñaPuntuacion.val(reseña.reseña.puntuacion);
  domElementos.inputReseñaContenido.val(reseña.reseña.reseña);
  domElementos.btnEditarReseña;
};

export const obtenerInfoReseniaEditar = reseña => {
  return {
    puntaje: domElementos.inputReseñaPuntuacion.val(),
    contenido: domElementos.inputReseñaContenido.val(),
    resenia: domElementos.inputIdResenia.val(),
    producto: domElementos.btnEditarReseña.attr('data-id')
  };
};

export const obtenerInfoResenia = evento => {
  const infoResenia = {
    idProducto: evento.parentElement.parentElement.children[1].innerText,
    idResenia: evento.getAttribute('data-id')
  };
  return infoResenia;
};

export const obtenerIdsResenia = evento => {
  const info = {
    idProducto:
      evento.target.parentElement.parentElement.parentElement.children[1]
        .children[0].innerText,
    idResenia: evento.target.getAttribute('data-id')
  };
  return info;
};

export const eliminarReseniaDom = evento => {
  const elementoHijo = evento.parentElement.parentElement;
  elementoHijo.remove();
};

export const obtenerIdCompra = e => e.target.getAttribute('data-id');

export const renderizarDetallesCompra = producto => {
  const markup = `
    <div class="misComprasContenido">
      <div class="misCompras__fecha">
          <h3 class="textoTablaPerfil">${producto.categoria}</h3>
      </div>
      <div class="misCompras__productos">
          <h3 class="textoTablaPerfil">${producto.articulo}</h3>
      </div>
      <div class="misCompras__precio">
          <h3 class="textoTablaPerfil">${producto.cantidad}</h3>
      </div>
      <div class="misCompras__verDetalles">
          <h3 class="textoTablaPerfil">$${producto.precio}</h3>
      </div>
    </div>`;

  domElementos.contenedorCompraUnica.append(markup);
};

export const mostrarMensajeResenia = respuesta => {
  if (respuesta.data.status === 'Exito') {
    configurarSweetAlert('success', 'Exito!', 'Has editado tu reseña');
  } else {
    configurarSweetAlert('fail', 'Error!', 'Parece que ha ocurrido un error');
  }
};

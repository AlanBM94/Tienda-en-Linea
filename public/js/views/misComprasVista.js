/* eslint-disable */

import { domElementos } from '../base';

export const obtenerIdUsuario = () => {
  const id = domElementos.idUsuario.attr('data-id');
  return id;
};

export const renderizarMisCompras = compra => {
  const markup = `
        <div class="misComprasContenido">
            <div class="misCompras__fecha">
                <h3 class="textoTablaPerfil">${compra.fecha}</h3>
            </div>
            <div class="misCompras__productos">
                <h3 class="textoTablaPerfil">${compra.carrito.productosHistorial.length} Productos comprados</h3>
            </div>
            <div class="misCompras__precio">
                <h3 class="textoTablaPerfil">$${compra.precio}</h3>
            </div>
            <div class="misCompras__verDetalles">
                <button class="btn btn--secundario btn--secundarioPequeño">Ver Detalles</button>
            </div>
        </div>
    `;
  domElementos.misComprasContenedor.append(markup);
};

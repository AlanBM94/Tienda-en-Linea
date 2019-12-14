/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';
import Peticion from '../models/peticiones';

export default class Perfil extends Peticion {
  constructor() {
    super();
  }
  async actualizar(data, token) {
    const respuesta = await super.hacerPeticionPatch(
      `/api/v1/usuarios/actualizarMiPerfil`,
      data,
      token
    );
    return respuesta;
  }

  async mostrarMisCompras(idUsuario) {
    const compras = await super.hacerPeticionGet(idUsuario, 'compras');
    return compras.data.compras;
  }

  async mostrarMisReseñas(idUsuario) {
    const reseñas = await super.hacerPeticionGet(idUsuario, 'resenias');
    return reseñas.data.data.reseñas;
  }

  async eliminarResenia(idProducto, idResenia) {
    await super.hacerPeticionDelete(
      `/api/v1/productos/${idProducto}/resenias/${idResenia}`
    );
  }
}

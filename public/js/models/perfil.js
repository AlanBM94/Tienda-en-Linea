/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';
import Peticion from '../models/peticiones';

export default class Perfil extends Peticion {
  constructor() {
    super();
  }
  async actualizar(data) {
    const respuesta = await super.hacerPeticionPatch(
      `http://localhost:3000/api/v1/usuarios/actualizarMiPerfil`,
      data
    );
    return respuesta;
  }

  async mostrarMisCompras(idUsuario) {
    const compras = await super.hacerPeticionGetAnidadaUsuarios(
      idUsuario,
      'compras'
    );
    return compras.data.compras;
  }

  async obtenerCompra(idCompra) {
    const compra = await super.hacerPeticionGet('compra', idCompra);
    return compra.data.data;
  }

  async obtenerResenia(idProducto, idResenia) {
    const resenia = await super.hacerPeticionGetAnidada(
      'productos',
      'resenias',
      idProducto,
      idResenia
    );
    return resenia.data.data;
  }

  async mostrarMisReseñas(idUsuario) {
    const reseñas = await super.hacerPeticionGetAnidadaUsuarios(
      idUsuario,
      'resenias'
    );
    return reseñas.data.data.reseñas;
  }

  async editarReseña(idProducto, idResenia, data) {
    const respuesta = await super.hacerPeticionPatchAnidada(
      'productos',
      'resenias',
      idProducto,
      idResenia,
      data
    );
    return respuesta;
  }

  async eliminarResenia(idProducto, idResenia) {
    await super.hacerPeticionDelete(
      `http://localhost:3000/api/v1/productos/${idProducto}/resenias/${idResenia}`
    );
  }
}

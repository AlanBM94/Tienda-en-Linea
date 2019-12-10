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
    console.log(respuesta, 'peticion');
    return respuesta;
  }
}

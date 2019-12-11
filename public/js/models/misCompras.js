/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';
import Peticion from '../models/peticiones';

export default class MisCompras extends Peticion {
  constructor(id) {
    super();
    this.idUsuario = id;
  }

  async mostrar() {
    const compras = await super.hacerPeticionGet(this.idUsuario, 'compras');
    return compras.data.compras;
  }
}

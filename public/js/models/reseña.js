/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';
import Peticion from '../models/peticiones';

export default class Reseña extends Peticion {
  constructor(infoReseña) {
    super();
    this.idProducto = infoReseña.id;
    this.puntuacion = infoReseña.puntuacion;
    this.reseña = infoReseña.reseña;
  }

  validarCreacionReseña(respuesta) {
    if (respuesta.data.status !== 'Exito') {
      if (respuesta.data.message.includes('duplicate key error')) {
        return 'No puedes escribir más de una reseña';
      }
      if (
        respuesta.data.message.includes(
          'Debes de comprar el producto antes de hacer la reseña'
        )
      ) {
        return 'Debes de comprar el producto antes de hacer la reseña';
      }
    } else {
      return true;
    }
  }

  async crear() {
    const respuesta = await super.hacerPeticionPost(
      `/api/v1/productos/${this.idProducto}/resenias`,
      {
        reseña: this.reseña,
        puntuacion: this.puntuacion
      }
    );
    const mensaje = this.validarCreacionReseña(respuesta);
    return mensaje;
  }
}

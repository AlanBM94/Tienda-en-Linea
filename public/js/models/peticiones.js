/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';

export default class Peticion {
  constructor() {}

  async hacerPeticionPost(url, data) {
    try {
      const consulta = await axios({
        method: 'POST',
        url,
        data
      });
      return consulta;
    } catch (error) {
      alert('Algo salió mal');
      console.log(error);
    }
  }

  async hacerPeticionPatch(url, data, token) {
    const config = {
      headers: { Authorization: 'bearer ' + token }
    };

    try {
      const consulta = await axios({
        method: 'PATCH',
        url,
        data,
        config
      });
      console.log(consulta, 'peticion22222222222');
      return consulta;
    } catch (error) {
      alert('Algo salió mal');
      console.log(error);
    }
  }

  async hacerPeticionUsuario(id) {
    try {
      const respuesta = await axios({
        url: `/api/v1/usuarios/${id}`,
        method: 'GET'
      });
      return respuesta;
    } catch (error) {
      alert('Algo salió mal');
      console.log(error);
    }
  }

  async obtenerUsuarios(idsUsuarios) {
    return Promise.all(idsUsuarios.map(id => this.hacerPeticionUsuario(id)));
  }
}

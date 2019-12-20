/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';

export default class Peticion {
  constructor() {}

  async hacerPeticionGetAnidada(id, tipo) {
    try {
      const consulta = await axios({
        method: 'GET',
        url: `/api/v1/usuarios/${id}/${tipo}`
      });
      return consulta;
    } catch (error) {
      alert('Algo salió mal');
      console.log(error);
    }
  }

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
      return consulta;
    } catch (error) {
      alert('Algo salió mal');
      console.log(error);
    }
  }

  async hacerPeticionDelete(url) {
    try {
      const consulta = await axios({
        method: 'DELETE',
        url
      });
      return consulta;
    } catch (error) {
      alert('Algo salió mal');
      console.log(error);
    }
  }

  async hacerPeticionGet(ruta, id) {
    try {
      const respuesta = await axios({
        url: `/api/v1/${ruta}/${id}`,
        method: 'GET'
      });
      return respuesta;
    } catch (error) {
      alert('Algo salió mal');
      console.log(error);
    }
  }

  async obtenerUsuarios(idsUsuarios) {
    return Promise.all(
      idsUsuarios.map(id => this.hacerPeticionGet('usuarios', id))
    );
  }
}

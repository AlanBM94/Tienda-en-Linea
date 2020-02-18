/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';

export default class Peticion {
  constructor() {}

  async hacerPeticionGetAnidadaUsuarios(id, tipo) {
    try {
      const consulta = await axios({
        method: 'GET',
        url: `api/v1/usuarios/${id}/${tipo}`
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

  async hacerPeticionPatch(url, data) {
    try {
      const consulta = await axios({
        method: 'PATCH',
        url,
        data
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
        url: `api/v1/${ruta}/${id}`,
        method: 'GET'
      });
      return respuesta;
    } catch (error) {
      alert('Algo salió mal');
      console.log(error);
    }
  }

  async hacerPeticionGetAnidada(ruta, rutaAnidada, idPrimario, idSecundario) {
    try {
      const respuesta = await axios({
        url: `api/v1/${ruta}/${idPrimario}/${rutaAnidada}/${idSecundario}`,
        method: 'GET'
      });
      return respuesta;
    } catch (error) {
      alert('Algo salió mal');
      console.log(error);
    }
  }

  async hacerPeticionPatchAnidada(
    ruta,
    rutaAnidada,
    idPrincipal,
    idSecundario,
    data
  ) {
    try {
      const consulta = await axios({
        method: 'PATCH',
        url: `api/v1/${ruta}/${idPrincipal}/${rutaAnidada}/${idSecundario}`,
        data
      });
      return consulta;
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

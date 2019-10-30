/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';

export default class IniciarSesion {
  constructor(usuario) {
    this.email = usuario.email;
    this.password = usuario.password;
  }

  async enviarPeticion() {
    try {
      const consulta = await axios({
        method: 'POST',
        url: '/api/v1/usuarios/iniciarSesion',
        data: {
          email: this.email,
          contraseña: this.password
        }
      });
      return consulta;
    } catch (error) {
      console.log(error);
      alert('Algo salió mal');
    }
  }
}

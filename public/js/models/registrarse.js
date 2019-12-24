/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';

export default class Registrarse {
  constructor(nuevoUsuario) {
    this.nombre = nuevoUsuario.nombre;
    this.email = nuevoUsuario.email;
    this.contraseña = nuevoUsuario.contraseña;
    this.confirmarContraseña = nuevoUsuario.confirmarContraseña;
  }

  async enviarPeticion() {
    try {
      const consulta = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/v1/usuarios/registrarse',
        data: {
          nombre: this.nombre,
          email: this.email,
          contraseña: this.contraseña,
          confirmarContraseña: this.confirmarContraseña
        }
      });
      return consulta;
    } catch (error) {
      alert('Algo salió mal');
      console.log(error);
    }
  }
}

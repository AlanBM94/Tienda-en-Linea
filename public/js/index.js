/* eslint-disable */
import { configWaypoints, domElementos } from './base';
import Registrarse from './models/registrarse';
import * as registrarseVista from './views/registrarseVista';

$(document).ready(function() {
  configWaypoints();

  const controladorRegistrarse = async () => {
    // Se crea la infoUsuario con los valores ingresados
    const infoUsuario = registrarseVista.obtenerValoresUsuarioRegistrado();
    if (infoUsuario !== undefined) {
      // Se crea un objeto con la información del usuario
      const objetoUsuario = new Registrarse(infoUsuario);
      // Se envía la petición al servidor para crear el usuario
      const usuarioRegistrado = await objetoUsuario.enviarPeticion();
      // Muestra el sweet alert según la respuesta de la petición
      registrarseVista.mostrarSweetAlert(usuarioRegistrado);
    }
  };

  // Evento que se dispara cuando se envía el formulario de Registro
  $(domElementos.formularioRegistrarse).submit(function(event) {
    event.preventDefault();
    controladorRegistrarse();
  });

  // Evento que se dispara cuando se cierra sesión
  domElementos.btnCerrarSesion.on('click', function(e) {
    e.preventDefault();
    document.cookie = 'jwt=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    location.assign('/');
  });
});

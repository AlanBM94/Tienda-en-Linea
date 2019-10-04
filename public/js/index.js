/* eslint-disable */
import { configWaypoints, domElementos } from './base';
import { eliminarCookie } from './utils/cookie';
import Registrarse from './models/registrarse';
import IniciarSesion from './models/iniciarSesion';
import * as registrarseVista from './views/registrarseVista';
import * as iniciarSesionVista from './views/iniciarSesionVista';

$(document).ready(function() {
  // Configura los puntos en los que se tienen que hacer animaciones
  configWaypoints();

  const controladorRegistrarse = async () => {
    // Se crea la infoUsuario con los valores ingresados
    const infoUsuario = registrarseVista.obtenerValoresUsuarioRegistrado();
    if (infoUsuario !== undefined) {
      // Se crea un objeto de la clase Registrarse con la información del usuario
      const objetoUsuario = new Registrarse(infoUsuario);
      // Se envía la petición al servidor para crear el usuario
      const usuarioRegistrado = await objetoUsuario.enviarPeticion();
      // Muestra el sweet alert según la respuesta de la petición
      registrarseVista.mostrarSweetAlert(usuarioRegistrado);
    }
  };

  const controladorIniciarSesion = async () => {
    // Se crea infoUsuario con la información del usuario que quiere iniciar sesión
    const infoUsuario = iniciarSesionVista.obtenerValoresIniciarSesion();
    if (infoUsuario !== undefined) {
      // Se crea un objeto de la clase IniciarSesion con la información del usuario
      const objetoUsuario = new IniciarSesion(infoUsuario);
      // Se envía una petición al servidor para confirmar que el usuario existe
      objetoUsuario.enviarPeticion();
      const usuarioLogeado = await objetoUsuario.enviarPeticion();
      iniciarSesionVista.mostrarSweetAlert(usuarioLogeado);
    }
  };

  // Evento que se dispara cuando se envía el formulario de Registro
  domElementos.formularioRegistrarse.submit(function(event) {
    event.preventDefault();
    controladorRegistrarse();
  });

  // Evento que se dispara cuando se envía el formulario de iniciar sesión
  domElementos.formularioIniciarSesion.submit(function(event) {
    event.preventDefault();
    controladorIniciarSesion();
  });

  // Evento que se dispara cuando se cierra sesión
  domElementos.btnCerrarSesion.on('click', function(e) {
    e.preventDefault();
    eliminarCookie();
    location.assign('/');
  });
});

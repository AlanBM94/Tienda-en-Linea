/* eslint-disable */
export const crearCookie = respuesta => {
  document.cookie = `jwt=${respuesta.data.token}; max-age=${60 *
    60 *
    24 *
    7} path=/`;
  document.cookie =
    'username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/';
};

export const eliminarCookie = () => {
  document.cookie = 'jwt=;expires=Thu, path=/ 01 Jan 1970 00:00:01 GMT; path=/';
};

export const obtenerCookiePorNombre = nombre => {
  var b = document.cookie.match('(^|[^;]+)\\s*' + nombre + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
};

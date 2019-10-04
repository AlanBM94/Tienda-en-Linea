/* eslint-disable */
export const crearCookie = respuesta => {
  document.cookie = `jwt=${respuesta.data.token}; max-age=${60 * 60 * 24 * 7}`;
};

export const eliminarCookie = () => {
  document.cookie = 'jwt=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';

export const cerrarSesion = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/usuarios/cerrarSesion'
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    console.log(err.response);
  }
};

/* eslint-disable */
import 'regenerator-runtime/runtime';
import axios from 'axios';

export default class Compra {
  constructor(id) {
    this.id = id;
  }
  async hacerPeticionStripe() {
    try {
      const stripe = Stripe('pk_test_ZDcXOQ8zKStcrxrjeTz1ynAN00aquyrddG');
      const consulta = await axios(
        `http://localhost:3000/api/v1/compra/checkout-session/${this.id}`
      );
      //Redirecciona al formulario de stripe
      await stripe.redirectToCheckout({
        sessionId: consulta.data.session.id
      });
    } catch (error) {
      console.log(error);
    }
  }

  async mostrarProductosConMasCompras() {
    try {
      const respuesta = await axios({
        url: `http://localhost:3000/api/v1/productos/productosMasVendidos`,
        method: 'GET'
      });
      return respuesta;
    } catch (error) {
      alert('Algo salió mal');
      console.log(error);
    }
  }
}

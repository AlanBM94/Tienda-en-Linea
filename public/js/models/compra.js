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
        `/api/v1/compra/checkout-session/${this.id}`
      );
      //Redirecciona al formulario de stripe
      await stripe.redirectToCheckout({
        sessionId: consulta.data.session.id
      });
      console.log(consulta);
    } catch (error) {
      console.log(error);
    }
  }
}

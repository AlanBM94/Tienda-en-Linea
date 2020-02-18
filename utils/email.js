const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');
const nodemailerSendgrid = require('nodemailer-sendgrid');

module.exports = class Email {
  constructor(usuario, url) {
    this.para = usuario.email;
    this.primerNombre = usuario.nombre.split(' ')[0];
    this.url = url;
    this.desde = `Alan Beltrán ${process.env.EMAIL_FROM}`;
  }

  nuevoTransporte() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport(
        nodemailerSendgrid({
          service: 'SendGrid',
          auth: {
            user: process.env.SENDGRID_USERNAME,
            pass: process.env.SENDGRID_PASSWORD
          }
        })
      );
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  crearMailOptions(subject, html) {
    const mailOptions = {
      from: this.desde,
      to: this.para,
      subject,
      html,
      text: htmlToText.fromString(html)
    };
    return mailOptions;
  }

  async send(template, subject) {
    const html = pug.renderFile(
      `${__dirname}/../views/emails/${template}.pug`,
      {
        primerNombre: this.primerNombre,
        url: this.url,
        subject
      }
    );
    const mailOptions = this.crearMailOptions(subject, html);
    await this.nuevoTransporte().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send(
      'Bienvenido',
      'Bienvenido a Mi Tienda, el lugar donde encuentrarás todos los artículos que necesitas'
    );
  }

  async enviarRecuperarContrasenia() {
    await this.send(
      'recuperarContrasenia',
      'Tu token para recuperar tu contraseña es valida solo por 10 minutos'
    );
  }

  async enviarMensajeNuevaCompra() {
    await this.send('nuevaCompra', 'Felicidades por tu nueva compra');
  }

  async enviarConfirmacionUsuarioPremium() {
    await this.send(
      'usuarioPremium',
      'Felicidades, te has convertido en un usuario premium'
    );
  }
};

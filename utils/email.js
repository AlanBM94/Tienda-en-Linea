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
          apiKey: process.env.SENDGRID_PASSWORD
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

  async send(template, subject) {
    const html = pug.renderFile(
      `${__dirname}/../views/emails/${template}.pug`,
      {
        firstName: this.firstName,
        url: this.url,
        subject
      }
    );

    const mailOptions = {
      from: this.desde,
      to: this.para,
      subject,
      html,
      text: htmlToText.fromString(html)
    };
    console.log(mailOptions);
    await this.nuevoTransporte().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send(
      'Bienvenido',
      'Bienvenido a Mi Tienda, el lugar donde encuentrarás todos los artículos que necesitas'
    );
  }
};

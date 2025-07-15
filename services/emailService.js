const nodemailer = require('nodemailer');
const emailConfig = require('../config/email');

const transporter = nodemailer.createTransport({
  service: emailConfig.service,
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure,
  auth: {
    user: emailConfig.auth.user,
    pass: emailConfig.auth.pass
  }
});

exports.sendWelcomeEmail = async (email, name) => {
  try {
    await transporter.sendMail({
      from: emailConfig.from,
      to: email,
      subject: 'Bienvenue sur notre plateforme',
      html: `<p>Bonjour ${name},</p>
             <p>Merci pour votre inscription!</p>`
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de bienvenue:', error);
    throw error;
  }
};


exports.sendResetPasswordEmail = async (email, code) => {
  try {
    await transporter.sendMail({
      from: emailConfig.from,
      to: email,
      subject: 'Code de réinitialisation de mot de passe',
      html: `<p>Voici votre code de réinitialisation :</p>
             <h3>${code}</h3>
             <p>Ce code expirera dans 15 minutes.</p>`
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de réinitialisation:', error);
    throw error;
  }
};
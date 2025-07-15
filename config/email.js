// config/email.js
module.exports = {
  service: process.env.EMAIL_SERVICE || 'Gmail',
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  from: process.env.EMAIL_FROM || '"Votre Site" <no-reply@example.com>',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000'
};
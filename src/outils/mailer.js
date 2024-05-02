const nodemailer = require('nodemailer')
require('dotenv').config()

/**
 * Nodemailer transporter object.
 * @type {import('nodemailer').Transporter}
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 26,
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
})
module.exports = { transporter }

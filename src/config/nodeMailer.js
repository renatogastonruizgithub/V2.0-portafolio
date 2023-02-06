const nodemailer = require("nodemailer");
require("dotenv").config();
   const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
     },
    tls: {
	rejectUnauthorized: false
}
  });

module.exports={
  transporter
  }
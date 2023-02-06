require("dotenv").config();
const {transporter} = require("../config/nodeMailer");



const sendEmail = async (model) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: process.env.EMAIL_USER, // list of receivers
    subject: `${model.nombre} quiere comunicarse con tigo`, // Subject line   
     html: `
     <p>Mensaje de:<strong> ${model.nombre}</strong></p>
     <p>Responder a: ${model.email}</p> 
     <p>${model.motivo}</p>`, // html body 
  });
    
     await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: model.email, // list of receivers
    subject: `Tu mensaje fue enviado con exito`, // Subject line   
     html: `
     <p>Hola:<strong> ${model.nombre}</strong></p>   
     <p>Gracias por comunicarte, pronto me pondre en contacto con ud</p>
     <p>Saludos cordiales!</p>`, // html body 
  });
     
};

module.exports = {sendEmail};
const sendEmailService = require("../services/sendEmailService");
const { endpointResponse } = require("../helpers/success");
const send = async (req, res) => {
    try {
         const model = {
      motivo: req.body.motivo,
      nombre: req.body.nombre,
      email: req.body.email,
     
    }
        const send = await sendEmailService.sendEmail(model)
        
    endpointResponse({
      res,
      message: "Su mensaje fue enviado con exito",     
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};


module.exports = {
 send
};

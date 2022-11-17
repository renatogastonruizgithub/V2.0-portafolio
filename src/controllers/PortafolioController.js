const servicioPortafolio = require("../services/PortafolioService");
const { endpointResponse } = require("../helpers/success");
const get = async (req, res) => {
  try {
    const portafolio = await servicioPortafolio.getPortafolio();
    endpointResponse({
      res,
      message: "portafolio retrieved successfully",
      body: portafolio,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

module.exports = { get };

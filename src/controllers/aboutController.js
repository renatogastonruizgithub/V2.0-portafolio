const aboutServicio = require("../services/aboutService");
const { endpointResponse } = require("../helpers/success");

const get = async (req, res) => {
  try {
    const about = await aboutServicio.getAbout();
    endpointResponse({
      res,
      message: "about retrieved successfully",
      body: about,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const create = async (req, res) => {
  try {
    const model = {
      texto: req.body.texto,
      nombre: req.body.nombre,
      imagen: req.body.imagen,
      ciudad: req.body.ciudad,
      cumple: req.body.cumple,
    };
    const about = await aboutServicio.create(model, res);
    endpointResponse({
      res,
      message: "about created successfully",
      body: about,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const model = {
      texto: req.body.texto,
      nombre: req.body.nombre,
      imagen: req.body.imagen,
      ciudad: req.body.ciudad,
      cumple: req.body.cumple,
    };

    const about = await aboutServicio.update(model, id);
    endpointResponse({
      res,
      message: "about updated successfully",
      body: about,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};
const Delete = async (req, res) => {
  try {
    const { id } = req.params;
    const about = await aboutServicio.Delete(id);
    endpointResponse({
      res,
      message: "about deleted successfully",
      body: about,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

module.exports = { create, get, update, Delete };

const servicioDetails = require("../services/detailsService");
const { endpointResponse } = require("../helpers/success");

const get = async (req, res) => {
  try {
    const details = await servicioDetails.get();
    endpointResponse({
      res,
      message: "details created successfully",
      body: details,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const create = async (req, res) => {
  try {
    const { id } = req.params;
    const model = {
      text: req.body.text,
      title: req.body.title,
      imagen: req.body.imagen,
    };
    const details = await servicioDetails.create(model, id);
    endpointResponse({
      res,
      message: "details created successfully",
      body: details,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const deleted = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await servicioDetails.deleted(id);
    endpointResponse({
      res,
      message: "details deleted successfully",
      body: details,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const model = {
      text: req.body.text,
      title: req.body.title,
      imagen: req.body.imagen,
    };
    const details = await servicioDetails.updated(model, id);
    endpointResponse({
      res,
      message: "details update successfully",
      body: details,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

module.exports = { get, create, deleted, update };

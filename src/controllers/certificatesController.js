const certificateServicio = require("../services/certificatesServices");
const { endpointResponse } = require("../helpers/success");

const get = async (req, res) => {
  try {
    const certificate = await certificateServicio.get();
    endpointResponse({
      res,
      message: "certificates retrieved successfully",
      body: certificate,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const create = async (req, res) => {
  try {
    const model = {
      title: req.body.title,
      company: req.body.company,
    };
    const { path } = req.file;
    const certificate = await certificateServicio.create(model, path);
    endpointResponse({
      res,
      message: "certificate created successfully",
      body: certificate,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const model = {
      title: req.body.title,
      company: req.body.company,
      logo: req.body.logo,
    };
    const certificate = await certificateServicio.update(model, id);
    endpointResponse({
      res,
      message: "certificate updated successfully",
      body: certificate,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};
const Delete = async (req, res) => {
  try {
    const { id } = req.params;
    const certificate = await certificateServicio.Delete(id);
    endpointResponse({
      res,
      message: "certificate deleted successfully",
      body: certificate,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

module.exports = { create, get, update, Delete };

const Home = require("../dataBase/models/home");
const homeServicio = require("../services/homeService");
const { endpointResponse } = require("../helpers/success");

const get = async (req, res) => {
  try {
    const banner = await homeServicio.getHome();
    endpointResponse({
      res,
      message: "banner retrieved successfully",
      body: banner,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const create = async (req, res) => {
  try {
    const model = {
      h1: req.body.h1,
      h2: req.body.h2,
      imagen: req.body.imagen,
      h3: req.body.h3,
    };
    const home = await homeServicio.create(model, res);
    endpointResponse({
      res,
      message: "Home retrieved successfully",
      body: home,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const update = async (req, res) => {
  try {
    const model = {
      h1: req.body.h1,
      h2: req.body.h2,
      imagen: req.body.imagen,
      h3: req.body.h3,
    };
    const { id } = req.params;
    const home = await homeServicio.update(model, id);
    endpointResponse({
      res,
      message: "Home updated successfully",
      body: home,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};
const Delete = async (req, res) => {
  try {
    const { id } = req.params;
    const _delete = await homeServicio.Delete(id);
    endpointResponse({
      res,
      message: "Home deleled successfully",
      body: _delete,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

module.exports = { create, get, update, Delete };

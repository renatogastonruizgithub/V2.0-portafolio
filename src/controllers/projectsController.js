const projectServicio = require("../services/projectService");
const { endpointResponse } = require("../helpers/success");

const get = async (req, res) => {
  try {
    const projects = await projectServicio.getProjects();
    endpointResponse({
      res,
      message: "projects retrieved successfully",
      body: projects,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const create = async (req, res) => {
  try {
    const model = {
      text: req.body.text,
      title: req.body.title,
      imagen: req.body.imagen,
    };
    const projects = await projectServicio.create(model);
    endpointResponse({
      res,
      message: "projects created successfully",
      body: projects,
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

    const projects = await projectServicio.update(model, id);
    endpointResponse({
      res,
      message: "projects updated successfully",
      body: projects,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};
const Delete = async (req, res) => {
  try {
    const { id } = req.params;

    const projects = await projectServicio.Delete(id);
    endpointResponse({
      res,
      message: "projects deleted successfully",
      body: projects,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

module.exports = { create, get, update, Delete };

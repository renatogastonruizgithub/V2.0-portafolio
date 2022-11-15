const projectServicio = require("../services/projectService");

const get = async (req, res) => {
  try {
    const get = await projectServicio.getProjects();
    return res.status(200).send({ projects: get });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, error: "error" });
  }
};

const create = async (req, res) => {
  try {
    const model = {
      text: req.body.text,
      title: req.body.title,
      imagen: req.body.imagen,
      skills: req.body.skills,
    };
    const crear = await projectServicio.create(model, res);
    return res.status(200).send({ data: crear });
  } catch (e) {
    res
      .status(500)
      .send({ error: e?.message, error: "error al crear c", stack: e.stack });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const model = {
      text: req.body.text,
      title: req.body.title,
      imagen: req.body.imagen,
      skills: req.body.skills,
    };

    const crear = await projectServicio.update(model, id);
    return res.status(200).send({ data: crear });
  } catch (e) {
    res
      .status(500)
      .send({
        error: e?.message,
        error: "error al actualizar",
        stack: e.stack,
      });
  }
};
const Delete = async (req, res) => {
  try {
    const { id } = req.params;

    const crear = await projectServicio.Delete(id);
    return res.status(200).send({ data: crear });
  } catch (e) {
    res
      .status(500)
      .send({ error: e?.message, error: "error al eliminar", stack: e.stack });
  }
};

module.exports = { create, get, update, Delete };

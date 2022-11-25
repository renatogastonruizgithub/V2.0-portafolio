const servicioSkill = require("../services/skillsService");
const { endpointResponse } = require("../helpers/success");

const get = async (req, res) => {
  try {
    const skills = await servicioSkill.getSkills();
    endpointResponse({
      res,
      message: "skills retrieved successfully",
      body: skills,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const create = async (req, res) => {
  try {
    const modelSkill = {
      nombre: req.body.nombre,
    };
    const { path } = req.file;
    const skills = await servicioSkill.create(modelSkill, path);
    endpointResponse({
      res,
      message: "skills created successfully",
      body: skills,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const modelSkill = {
      nombre: req.body.nombre,
      link: req.body.link,
    };
    const { path } = req.file;
    const skills = await servicioSkill.update(modelSkill, id, path);
    endpointResponse({
      res,
      message: "skills updated successfully",
      body: skills,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};
const Delete = async (req, res) => {
  try {
    const { id } = req.params;

    const skills = await servicioSkill.Delete(id);
    endpointResponse({
      res,
      message: "skills delated successfully",
      body: skills,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

module.exports = { create, Delete, update, get };

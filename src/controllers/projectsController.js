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

const getDetailsProject = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await projectServicio.getDetailsProject(id);
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
    const model = {
      text: req.body.text,
      title: req.body.title,
    };
    const { path } = req.file;
    const projects = await projectServicio.create(model, path);
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
    };
    const { path } = req.file;
    const projects = await projectServicio.update(model, id, path);
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
const createSkills = async (req, res) => {
  try {
    const { id } = req.params;
    const model = { SkillId: req.body.SkillId };
    const details = await projectServicio.createSkills(model, id);
    endpointResponse({
      res,
      message: "details created skill successfully",
      body: details,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

const deletedSkills = async (req, res) => {
  try {
    const { idSkill } = req.params;
    const { idProjecto } = req.params;
    const details = await projectServicio.deletedSkills(idSkill, idProjecto);
    endpointResponse({
      res,
      message: "details deleted successfully",
      body: details,
    });
  } catch (e) {
    res.status(e?.status || 500).send({ error: e?.message, stack: e.stack });
  }
};

module.exports = {
  create,
  get,
  update,
  Delete,
  deletedSkills,
  createSkills,
  getDetailsProject,
};

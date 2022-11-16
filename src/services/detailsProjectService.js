const Details = require("../dataBase/models/details_project");
const Project = require("../dataBase/models/Projects");
const Skill = require("../dataBase/models/Skills");

const getDetailsProject = async (id) => {
  const projects = await Details.findAll({
    where: { id: id },
    model: Project,
    include: [{ model: Skill, attributes: { exclude: ["PortafolioId"] } }],
  }).catch((e) => {
    throw new Error("error al obtener datos " + e);
  });
  return projects;
};
module.exports = { getDetailsProject };

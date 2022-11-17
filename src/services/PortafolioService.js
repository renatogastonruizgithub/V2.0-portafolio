const About = require("../dataBase/models/About");
const Certificated = require("../dataBase/models/certificated");
const Home = require("../dataBase/models/home");
const Portafolio = require("../dataBase/models/portafolio");
const Project = require("../dataBase/models/Projects");
const Skill = require("../dataBase/models/Skills");

const getPortafolio = async () => {
  const IfExist = await Portafolio.count();
  if (IfExist == 0)
    throw new Error("No hay registros, debe agregar una home y about");

  const projects = await Portafolio.findAll({
    attributes: { exclude: ["createdAt", "updatedAt", "AboutId", "HomeId"] },
    include: [
      { model: Home },
      {
        model: Skill,
        attributes: { exclude: ["PortafolioId"] },
      },
      { model: About },
      { model: Certificated },
      { model: Project },
    ],
  }).catch((e) => {
    throw new Error("error en base de datos" + e);
  });
  return projects;
};

module.exports = { getPortafolio };

const About = require("../dataBase/models/About");
const Home = require("../dataBase/models/home");
const Portafolio = require("../dataBase/models/portafolio");
const Project = require("../dataBase/models/Projects");
const Skill = require("../dataBase/models/Skills");

const getPortafolio = async () => {
  const projects = await Portafolio.findAll({
    attributes: { exclude: ["createdAt", "updatedAt", "AboutId", "HomeId"] },

    include: [
      { model: Home },
      {
        model: Skill,
        attributes: { exclude: ["PortafolioId"] },
        /*  include:[
        {model:Project}
      ] */
      },
      { model: About },
      { model: Project },
    ],
  }).catch((e) => {
    throw new Error("error al obtener datos " + e);
  });
  return projects;
};

module.exports = { getPortafolio };

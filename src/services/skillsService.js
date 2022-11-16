const Portafolio = require("../dataBase/models/portafolio");
const Skill = require("../dataBase/models/Skills");

const getSkills = async () => {
  const skills = await Skill.findAll({
    attributes: ["id", "nombre", "link"],
    attributes: { exclude: ["PortafolioId"] },
  }).catch((e) => {
    throw new Error("error al obtener datos " + e);
  });

  return skills;
};

const create = async (modelSkill, res) => {
  const portafolio = await Portafolio.findAll();
  let id;
  portafolio.forEach((material) => {
    id = material;
    return id;
  });

  if (portafolio.length == 0) return "debe crear una home";
  else {
    try {
      const creado = await Skill.create({
        nombre: modelSkill.nombre,
        link: modelSkill.link,
        PortafolioId: id.dataValues.id,
      });

      return creado;
    } catch (e) {
      throw new Error("error en base de datos" + e);
    }
  }
};

const Delete = async (id) => {
  const skill = await Skill.findByPk(id);
  if (!skill) throw new Error("no existe este registro");
  try {
    const borrado = await Skill.destroy({
      where: { id: id },
    });
    return "Deleted";
  } catch (e) {
    throw new Error("error en base de datos" + e);
  }
};

const update = async (modelSkill, id) => {
  const IfExist = await Skill.count();
  if (IfExist == 0) throw new Error("no hay registros");

  const skill = await Skill.findByPk(id);
  if (!skill) throw new Error("no existe este registro");

  try {
    const act = await Skill.update(
      {
        nombre: modelSkill.nombre,
        link: modelSkill.link,
      },
      {
        where: { id: id },
      }
    );
    return act;
  } catch (e) {
    throw new Error("error en base de datos" + e);
  }
};

module.exports = { create, Delete, update, getSkills };

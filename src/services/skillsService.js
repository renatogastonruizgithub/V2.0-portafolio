const Portafolio = require("../dataBase/models/portafolio");
const Skill = require("../dataBase/models/Skills");

const getSkills = async () => {
  const skills = await Skill.findAll({
    attributes: ["id", "nombre", "link"],
    attributes: { exclude: ["PortafolioId"] },
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
      return res.status(500).send({ stack: e.stack, error: "error al crear" });
    }
  }
};

const Delete = async (id) => {
  const IfExist = await Skill.findOne({ where: { id: id } });
  if (!IfExist) return "not found id";
  try {
    const borrado = await Skill.destroy({
      where: { id },
    });
    return "Deleted";
  } catch (error) {
    throw new Error("not found");
  }
};

const update = async (modelSkill, id) => {
  const IfExist = await Skill.findOne({ where: { id: id } });
  if (!IfExist) return "not found id";
  else {
    const act = await Skill.update(
      {
        nombre: modelSkill.nombre,
        link: modelSkill.link,
      },
      {
        where: { id },
      }
    );
  }

  return "actualizado";
};

module.exports = { create, Delete, update, getSkills };

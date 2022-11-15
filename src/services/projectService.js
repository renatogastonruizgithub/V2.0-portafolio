const Portafolio = require("../dataBase/models/portafolio");
const Project = require("../dataBase/models/Projects");

const getProjects = async () => {
  const projects = await Project.findAll({
    //devuelvo estos campos
    attributes: ["id", "text", "title", "imagen"],
  }).catch((e) => {
    throw new Error("error en base de datos" + e);
  });
  return projects;
};

const create = async (model) => {
  const portafolio = await Portafolio.findAll();
  let id;
  portafolio.forEach((material) => {
    id = material;
    return id;
  });

  if (portafolio.length == 0) return "debe crear una home";
  else {
    try {
      const projects = await Project.create({
        text: model.text,
        title: model.title,
        imagen: model.imagen,
        PortafolioId: id.dataValues.id,
      }).catch((e) => {
        throw new Error("error al guardar");
      });

      return projects;
    } catch (e) {
      throw new Error("error en base de datos" + e);
    }
  }
};

const Delete = async (id) => {
  const IfExist = await Project.count();
  if (IfExist == 0) throw new Error("no hay registros");
  const about = await Project.findByPk(id);
  if (!about) {
    throw new Error("no existe este registro");
  }
  try {
    const borrado = await Project.destroy({
      where: { id },
    });
    return borrado;
  } catch (e) {
    throw new Error("error en base de datos" + e);
  }
};

const update = async (model, id) => {
  const IfExist = await Project.count();
  if (IfExist == 0) throw new Error("no hay registros");
  const about = await Project.findByPk(id);
  if (!about) {
    throw new Error("no existe este registro");
  }
  try {
    const act = await Project.update(
      {
        imagen: model.imagen,
        title: model.title,
        text: model.text,
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

module.exports = { create, getProjects, update, Delete };

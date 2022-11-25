const Details = require("../dataBase/models/details_project");
const Project = require("../dataBase/models/Projects");
const Portafolio = require("../dataBase/models/portafolio");
const { uplpoadImagen } = require("../helpers/firebase");

const get = async () => {
  const details = await Details.findAll({}).catch((e) => {
    throw new Error("error en base de datos" + e);
  });
  return details;
};

const create = async (model, id, req) => {
  const portafolio = await Portafolio.count();
  const project = await Project.count();
  if (!portafolio) throw new Error("Debe crear una home");
  if (!project) throw new Error("Debe crear una proyecto");

  try {
    const arrayUrl = [];
    req.path.map((element, i) => {
      arrayUrl.push(element.path);
    });
    console.log("urls " + arrayUrl.join(",").toString());
    const urls = arrayUrl.join(",").toString();

    const details = await Details.create({
      text: model.text,
      title: model.title,
      imagen: urls,
      ProjectId: id,
    });
    return details;
  } catch (e) {
    throw new Error("error en base de datos " + e);
  }
};
const updated = async (model, id, path) => {
  const IfExist = await Details.count();
  if (IfExist == 0) throw new Error("no hay registros");

  const details = await Details.findByPk(id);
  if (!details) throw new Error("no existe este registro");

  try {
    const url = await uplpoadImagen(path);
    const details = await Details.update(
      {
        text: model.text,
        title: model.title,
        imagen: url,
      },
      {
        where: { id: id },
      }
    );
    return details;
  } catch (e) {
    throw new Error("error en base de datos" + e);
  }
};

const deleted = async (id) => {
  const IfExist = await Details.count();
  if (IfExist == 0) throw new Error("no hay registros");
  const details = await Details.findByPk(id);
  if (!details) {
    throw new Error("no existe este registro");
  }
  try {
    const borrado = await Details.destroy({
      where: { id: id },
    });
    return borrado;
  } catch (e) {
    throw new Error("error en base de datos" + e);
  }
};
module.exports = { get, create, deleted, updated };

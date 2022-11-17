const Certificate = require("../dataBase/models/certificated");
const Portafolio = require("../dataBase/models/portafolio");

const get = async () => {
  const get = await Certificate.findAll({}).catch((e) => {
    throw new Error("error en base de datos" + e);
  });
  return get;
};

const create = async (model) => {
  const portafolio = await Portafolio.findAll();
  let id;
  portafolio.forEach((material) => {
    id = material;
    return id;
  });

  if (portafolio.length == 0) return "debe crear una home";

  try {
    const creado = await Certificate.create({
      title: model.title,
      company: model.company,
      logo: model.logo,
      PortafolioId: id.dataValues.id,
    });

    return creado;
  } catch (e) {
    throw new Error("error en base de datos" + e);
  }
};

const Delete = async (id) => {
  const IfExist = await Certificate.count();
  if (IfExist == 0) throw new Error("no hay registros");
  const about = await Certificate.findByPk(id);
  if (!about) {
    throw new Error("no existe este registro");
  }
  try {
    const borrado = await Certificate.destroy({
      where: { id: id },
    });
    return borrado;
  } catch (e) {
    throw new Error("error en base de datos" + e);
  }
};

const update = async (model, id) => {
  const IfExist = await Certificate.count();
  if (IfExist == 0) throw new Error("no hay registros");

  const about = await Certificate.findByPk(id);
  if (!about) throw new Error("no existe este registro");

  try {
    const act = await Certificate.update(
      {
        title: model.title,
        company: model.company,
        logo: model.logo,
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

module.exports = { create, get, update, Delete };

const Home = require("../dataBase/models/home");
const Portafolio = require("../dataBase/models/portafolio");

const getHome = async () => {
  const get = await Home.findAll().catch((e) => {
    throw new Error("error al obtener datos");
  });
  return get;
};

const create = async (model, res) => {
  const IfExist = await Home.count();
  if (IfExist > 0) throw new Error("Solo se puede editar los datos");
  try {
    const creado = await Home.create({
      h1: model.h1,
      h2: model.h2,
      h3: model.h3,
      imagen: model.imagen,
    }).catch((e) => {
      return e;
    });

    const portafolio = await Portafolio.create({
      HomeId: creado.getDataValue("id"),
    });
    return creado;
  } catch (e) {
    throw new Error("error en base de datos" + e);
  }
}; //

const Delete = async (id) => {
  const IfExist = await Home.count();
  if (IfExist == 0) throw new Error("no hay registros");
  const home = await Home.findOne({
    where: { id: id },
  });
  if (!home) {
    throw new Error("no se encontro este id");
  }

  try {
    const borrado = await Home.destroy({
      where: { id: id },
    });
    return borrado;
  } catch (e) {
    throw new Error("error en base de datos" + e);
  }
};
const update = async (model, id) => {
  const IfExist = await Home.count();
  if (IfExist == 0) throw new Error("no hay registros");
  const home = await Home.findOne({
    where: { id: id },
  });
  if (!home) {
    throw new Error("no se encontro este id");
  } else {
    try {
      const act = await Home.update(
        {
          imagen: model.imagen,
          h1: model.h1,
          h2: model.h2,
          h3: model.h3,
        },
        {
          where: { id: id },
        }
      );
      return act;
    } catch (e) {
      throw new Error("error en base de datos " + e);
    }
  }
};

module.exports = { create, getHome, update, Delete };

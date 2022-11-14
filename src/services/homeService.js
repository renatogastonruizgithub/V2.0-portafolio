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
    return res.status(500).json({ error: "error al crear s", stack: e.stack });
  }
}; //

const Delete = async (id) => {
  const IfExist = await Home.count();
  if (IfExist == 0) throw new Error("no hay registros");
  try {
    const borrado = await Home.destroy({
      where: { id: id },
    });

    return "Deleted";
  } catch (error) {
    throw new Error("not found");
  }
};
const update = async (model, id, res) => {
  const IfExist = await Home.count();
  if (IfExist == 0) throw new Error("no hay registros");
  const home = await Home.findOne({
    where: { id: id },
  });
  if (!home) {
    return res
      .status(404)
      .json({ error: "no existe paramtetro", stack: e.stack });
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
      return "Actualizado";
    } catch (e) {
      return res
        .status(500)
        .json({ error: "error al crear actualizar s", stack: e.stack });
    }
  }
};

module.exports = { create, getHome, update, Delete };

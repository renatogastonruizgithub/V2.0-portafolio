const About = require("../dataBase/models/About");
const Portafolio = require("../dataBase/models/portafolio");

const getAbout = async () => {
  const get = await About.findAll({}).catch((e) => {
    throw new Error("error en base de datos" + e);
  });
  return get;
};

const create = async (model, res) => {
  const portafolio = await Portafolio.findAll();
  let id;
  portafolio.forEach((material) => {
    id = material;
    return id;
  });

  if (portafolio.length == 0) return "debe crear una home";
  else {
    const IfExist = await About.count();
    if (IfExist > 0) throw new Error("Solo se puede editar los datos");
    try {
      const creado = await About.create({
        imagen: model.imagen,
        nombre: model.nombre,
        texto: model.texto,
        ciudad: model.ciudad,
        cumple: model.cumple,
      }).catch((e) => {
        throw new Error("error al guardar");
      });
      const portafolio = await Portafolio.update(
        {
          AboutId: creado.getDataValue("id"),
        },
        {
          where: { id: 1 },
        }
      );
      return creado;
    } catch (e) {
      throw new Error("error en base de datos" + e);
    }
  }
};

const Delete = async (id) => {
  const IfExist = await About.count();
  if (IfExist == 0) throw new Error("no hay registros");
  const about = await About.findByPk(id);
  if (!about) {
    throw new Error("no existe registro");
  }
  try {
    const borrado = await About.destroy({
      where: { id: id },
    });
    return "Deleted";
  } catch (e) {
    throw new Error("error en base de datos" + e);
  }
};

const update = async (model, id) => {
  const IfExist = await About.count();
  if (IfExist == 0) throw new Error("no hay registros");

  const about = await About.findByPk(id);
  if (!about) throw new Error("no existe este registro");

  try {
    const act = await About.update(
      {
        imagen: model.imagen,
        nombre: model.nombre,
        texto: model.texto,
        ciudad: model.ciudad,
        cumple: model.cumple,
      },
      {
        where: { id: id },
      }
    ).catch((e) => {
      throw new Error("error al actualizar");
    });
    return "actualizado";
  } catch (e) {
    throw new Error("error en base de datos" + e);
  }
};

module.exports = { create, getAbout, update, Delete };

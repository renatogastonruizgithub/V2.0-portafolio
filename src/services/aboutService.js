const About = require("../models/About");
const Portafolio = require("../models/portafolio");

const getAbout = async () => {
  const get = await About.findAll({
    
  }).catch((e) => {
    throw new Error("error al obtener datos");
  });
  return get;
};

const create = async (model, res) => {

  const portafolio = await Portafolio.findAll()
  let id    
  portafolio.forEach((material) => {
     id=material
    return id   
  }); 
   
  if(portafolio.length ==0) return "debe crear una home"
  else{
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
      return res
        .status(500)
        .json({ error: e?.message, error: "error al crear s", stack: e.stack });
    }
  }


 
}; //

const Delete = async (id) => {
  const IfExist = await About.count();
  if (IfExist == 0) throw new Error("no hay registros");
  try {
    const borrado = await About.destroy({
      where: { id: id },
    });
    return "Deleted";
  } catch (error) {
    throw new Error("not found");
  }
};

const update = async (model) => {
  const IfExist = await About.count();
  if (IfExist == 0) throw new Error("no hay registros");
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
        where: { id: [1] },
      }
    ).catch((e) => {
      throw new Error("error al actualizar");
    });
    return "actualizado";
  } catch (error) {}
};

module.exports = { create, getAbout, update, Delete };

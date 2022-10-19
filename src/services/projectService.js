const Portafolio = require("../models/portafolio")
const Project = require("../models/Projects")


const getProjects= async()=>{
  const projects = await Project.findAll(
    { //devuelvo estos campos
      attributes: ['id','text', 'title','imagen']     
    }
  ).catch((e)=>{
    throw new Error("error al obtener datos")
  })
  return projects
}

const create = async(model,res) =>{
  
      const portafolio = await Portafolio.findAll()
      let id    
      portafolio.forEach((material) => {
         id=material
        return id   
      }); 
       
      if(portafolio.length ==0) return "debe crear una home"
      else{
        try {
          const projects= await Project.create({
            text:model.text,
            title:model.title,
            imagen:model.imagen,
            skills:model.skills,
            PortafolioId:id.dataValues.id
        },).catch((e)=>{
          throw new Error("error al guardar")
        })
     
        return projects    
        }  
        catch(e){
         return res.status(500).json({error:e?.message,error:"error al crear s",stack:e.stack})
        }  
      }
       
  }


  const Delete =async(id)=>{
    const IfExist = await Project.findOne({where:{id: id}})
    if(!IfExist) return "not found id" 
    try {
      const borrado= await Project
                    .destroy({
                      where: {id}
                    })                  
      return "Deleted"
  
    } catch (error) {
      throw new Error("not found")
    }
      
  }
      
  
  const update =async(model,id)=>{
    try {
      const IfExist = await Project.findOne({where:{id: id}})
      if(!IfExist) return "not found id" 
         else{
            const act= await Project
            .update({
              imagen:model.imagen,
              title:model.title,
              text:model.text,
              skills:model.skills          
            },{
              where: {id}
            }).catch((e)=>{
              throw new Error("error al actualizar")
            })
         }
        return "actualizado"
    } catch (error) {
      
    }    
  
  }
  

  module.exports={create,getProjects,update,Delete}



















  
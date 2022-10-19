 const Portafolio = require('../models/portafolio')
const servicioSkill= require('../services/skillsService')

 const get= async(req,res)=>{
    try{      
     const get= await servicioSkill.getSkills() 
    return res.status(200).send({skills:get})
    }   
    catch(e){       
        res.status(e?.status || 500)
        .send({error:e?.message,error:"error"})
    }
  
 }

const create= async(req,res)=>{
    
    try{      
        const modelSkill =  {
            nombre:req.body.nombre,
            link:req.body.link,          
        } 
       
    const crear= await servicioSkill.create(modelSkill,res)
    return res.status(200).send({"data":crear})
    }
   
    catch(e){
        res.status(500).send({error:"error al crear",stack:e.stack})
    }
 }

 const update= async(req,res)=>{
    try{
        const {id}=req.params
        const modelSkill =  {
            nombre:req.body.nombre,
            link:req.body.link,
        } 
        console.log(id)
    const crear= await servicioSkill.update(modelSkill,id)
    return res.status(200).send({"data":crear})
    }
   
    catch(e){
        res.status(500).send({error:e?.message,error:"error al actualizar",stack:e.stack})
    }
 }
const Delete= async(req,res)=>{
    try{
        const {id}=req.params
     
    const crear= await servicioSkill.Delete(id)
    return res.status(200).send({"data":crear})
    }
   
    catch(e){
        res.status(500).send({error:e?.message,error:"error al eliminar",stack:e.stack})
    }
 }

 module.exports={create,Delete,update,get}
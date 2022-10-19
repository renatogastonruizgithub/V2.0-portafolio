const aboutServicio= require('../services/aboutService')

const get= async(req,res)=>{
    try{      
     const get= await aboutServicio.getAbout()
    return res.status(200).send({about:get})
    }   
    catch(e){       
        res.status(e?.status || 500)
        .send({error:e?.message,error:"error"})
    }
  
 }

const create= async(req,res)=>{
    try{        
        const model= {
            texto:req.body.texto,
            nombre:req.body.nombre,
            imagen:req.body.imagen,
            ciudad:req.body.ciudad,
            cumple:req.body.cumple    
        }        
        const crear= await aboutServicio.create(model,res)
    return res.status(200).send({"data":crear})
    }   
    catch(e){
        res.status(500).send({error:e?.message,error:"error al crear c",stack:e.stack})
    }
 }

 const update= async(req,res)=>{
    try{
        const {id}=req.params
        const model =  {
            texto:req.body.texto,
            nombre:req.body.nombre,
            imagen:req.body.imagen,
            ciudad:req.body.ciudad,
            cumple:req.body.cumple  
        } 
       
    const crear= await aboutServicio.update(model,id)
    return res.status(200).send({"data":crear})
    }   
    catch(e){
        res.status(500).send({error:e?.message,error:"error al actualizar",stack:e.stack})
    }
 }
const Delete= async(req,res)=>{
    try{
        const {id}=req.params
    const crear= await aboutServicio.Delete(id)
    return res.status(200).send({"data":crear})
    }
   
    catch(e){
        res.status(500).send({error:e?.message,error:"error al eliminar",stack:e.stack})
    }
 }

 module.exports={create,get,update,Delete}
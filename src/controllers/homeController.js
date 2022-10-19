const homeServicio= require('../services/homeService')

const get= async(req,res)=>{
    try{      
     const get= await homeServicio.getHome()
    return res.status(200).send({projects:get})
    }   
    catch(e){       
        res.status(e?.status || 500)
        .send({error:e?.message,error:"error"})
    }
  
 }

const create= async(req,res)=>{
    try{        
        const model= {
            h1:req.body.h1,
            h2:req.body.h2,
            imagen:req.body.imagen,
            h3:req.body.h3            
        }        
        const crear= await homeServicio.create(model,res)
    return res.status(200).send({"data":crear})
    }   
    catch(e){
        res.status(500).send({error:e?.message,error:"error al crear c",stack:e.stack})
    }
 }

 const update= async(req,res)=>{
    try{       
        const model =  {
            h1:req.body.h1,
            h2:req.body.h2,
            imagen:req.body.imagen,
            h3:req.body.h3    
        } 
       
    const crear= await homeServicio.update(model,id)
    return res.status(200).send({"data":crear})
    }   
    catch(e){
        res.status(500).send({error:e?.message,error:"error al actualizar",stack:e.stack})
    }
 }
const Delete= async(req,res)=>{
    try{
        const {id}=req.params
    const _delete= await homeServicio.Delete(id)
    return res.status(200).send({"data":_delete})
    }
   
    catch(e){
        res.status(500).send({error:e?.message,error:"error al eliminar",stack:e.stack})
    }
 }

 module.exports={create,get,update,Delete}
const servicioDetails= require('../services/detailsProjectService')

 const get= async(req,res)=>{
    try{     
        const {id}=req.params
     const get= await servicioDetails.getDetailsProject(id) 
    return res.status(200).send({details:get})
    }   
    catch(e){       
        res.status(e?.status || 500)
        .send({error:e?.message,error:"error",stack:e.stack})
    }  
 }

 module.exports={get}
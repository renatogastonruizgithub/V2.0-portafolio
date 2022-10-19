const servicioPortafolio= require('../services/PortafolioService')

 const get= async(req,res)=>{
    try{      
     const get= await servicioPortafolio.getPortafolio() 
    return res.status(200).send({portafolio:get})
    }   
    catch(e){       
        res.status(e?.status || 500)
        .send({error:e?.message,error:"error",stack:e.stack})
    }  
 }

 module.exports={get}
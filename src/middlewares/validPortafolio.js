const Portafolio = require("../models/portafolio");

const validPortafolio= async(err, req, res, next)=> {        
    const portafolio = await Portafolio.findAll()

    if(portafolio.length == 0){
       return res
        .status(500)
        .json({ message: err.message,error:"debe agregar home",
          //? no manda el stack del error en producion      
          stack:process.env.NODE_ENV === 'production'? 'ups! error' :  err.stack 
        });
       
    } 
    next()
    }
    
    module.exports={validPortafolio}
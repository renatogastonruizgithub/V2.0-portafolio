const About = require('../models/About')
const Home = require('../models/home')
const Portafolio=require('../models/portafolio')
const Project = require('../models/Projects')
const Skill = require('../models/Skills')


const getPortafolio= async()=>{
  
    const projects = await Portafolio.findAll({

        attributes: {exclude: ['createdAt','updatedAt','AboutId','HomeId']},

     include: [
      { model: Home },
      { model: Skill,attributes: {exclude: ['PortafolioId']},
     /*  include:[
        {model:Project}
      ] */
    },
      { model: About },
      { model: Project },
    ]
    }
       

    ).catch((e)=>{
      throw new Error("error al obtener datos")
    })
    return projects
  }
  
  module.exports={getPortafolio}
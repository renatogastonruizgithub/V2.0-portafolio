

const Details = require('../models/details_project')
const Portafolio = require('../models/portafolio')
const Project = require('../models/Projects')
const Projects_Skills = require('../models/Projects_Skills')
const Skill = require('../models/Skills')



   const getDetailsProject= async()=>{  
    const projects = await Details.findAll({
      where:{id:1},
      model:Project,    
      
      include:[{model:Skill, attributes: {exclude: ['PortafolioId']}}]
 
  
  }).catch((e)=>{
    throw new Error("error al obtener datos")
  })
  return projects
} 
  module.exports={getDetailsProject}
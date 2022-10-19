
 const sequelize=require('../dataBase/connection')
const { DataTypes } = require('sequelize');
const Details = require('./details_project');
const Skill = require('./Skills');
const Portafolio = require('./portafolio');


const Project = sequelize.define('Projects', { 
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, 
{
  timestamps: false
 }, 

{
tableName:"Projects"
});



Details.hasOne(Project)
Project.belongsTo(Details)

Project.belongsToMany(Skill,{through: 'Projects_Skills'})
Skill.belongsToMany(Project,{through: 'Projects_Skills'})


module.exports=Project
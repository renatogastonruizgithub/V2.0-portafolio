
 const sequelize=require('../dataBase/connection')
 const { DataTypes } = require('sequelize');
const Project = require('./Projects');

 
 
 const Skill = sequelize.define('Skills', { 
   nombre: {
     type: DataTypes.STRING,
     allowNull: false
   },
   link: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  
 },
 {
  timestamps: false
 }, 
 
 {
 tableName:"Skills"
 });
 

 module.exports=Skill
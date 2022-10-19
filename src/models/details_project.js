const sequelize=require('../dataBase/connection')
const { DataTypes } = require('sequelize');
const Skill = require('./Skills');
const Project = require('./Projects');


const Details = sequelize.define('Details', { 
  imagen: {
    type: DataTypes.JSON(),
    allowNull: true
  },
  text: {
    type: DataTypes.TEXT('long'),
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
tableName:"Details"
},
 );






module.exports=Details
const About = require("./About");
const sequelize = require("../connection");
const { DataTypes } = require("sequelize");
const Project = require("./Projects");
const Skill = require("./Skills");
const Certificated = require("./certificated");
const Home = require("./home");

const Portafolio = sequelize.define(
  "Portafolio",
  {},
  {
    tableName: "Portafolio",
  }
);

About.hasOne(Portafolio);
Portafolio.belongsTo(About);

Home.hasOne(Portafolio);
Portafolio.belongsTo(Home);

Portafolio.hasMany(Project);

Portafolio.hasMany(Skill);
Skill.belongsTo(Portafolio);

Portafolio.hasMany(Certificated);

module.exports = Portafolio;

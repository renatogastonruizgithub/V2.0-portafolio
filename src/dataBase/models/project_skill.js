const sequelize = require("../connection");
const { DataTypes } = require("sequelize");
const Project = require("./Projects");
const Skill = require("./Skills");

const Projects_skills = sequelize.define(
  "Projects_skills",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },

  {
    tableName: "Projects_skills",
  }
);

Project.belongsToMany(Skill, { through: "Projects_skills" });
Skill.belongsToMany(Project, { through: "Projects_skills" });

module.exports = Projects_skills;

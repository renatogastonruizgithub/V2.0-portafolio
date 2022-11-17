const sequelize = require("../connection");
const { DataTypes } = require("sequelize");
const Details = require("./details_project");

const Project = sequelize.define(
  "Projects",
  {
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },

  {
    tableName: "Projects",
  }
);

Project.hasOne(Details);
Details.belongsTo(Project);

module.exports = Project;

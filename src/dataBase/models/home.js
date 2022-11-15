const sequelize = require("../connection");
const { DataTypes } = require("sequelize");

const Home = sequelize.define(
  "Home",
  {
    h1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    h2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    h3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  },
  {
    tableName: "Home",
  }
);
module.exports = Home;

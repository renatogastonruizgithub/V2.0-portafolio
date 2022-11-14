const sequelize = require("../connection");
const { DataTypes } = require("sequelize");

const Certificated = sequelize.define(
  "Certificated",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  },
  {
    tableName: "Certificated",
  }
);
module.exports = Certificated;

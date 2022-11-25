const sequelize = require("../connection");
const { DataTypes } = require("sequelize");

const Details = sequelize.define(
  "Details",
  {
    imagen: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
      get: function () {
        // devuelvo array
        return this.getDataValue("imagen").split(",");
      },
    },
    text: {
      type: DataTypes.TEXT("long"),
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
    tableName: "Details",
  }
);

module.exports = Details;

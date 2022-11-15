const sequelize = require("../connection");
const { DataTypes } = require("sequelize");

const Details = sequelize.define(
  "Details",
  {
    imagen: {
      type: DataTypes.TEXT("long"),
      allowNull: true,
      get: function () {
        // devuelvo string
        return JSON.stringify(this.getDataValue("imagen"))
          .slice(1, -1)
          .split(" ");
      },
      set: function (value) {
        return this.setDataValue("imagen", JSON.stringify(value));
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

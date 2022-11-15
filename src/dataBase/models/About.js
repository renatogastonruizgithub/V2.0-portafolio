const sequelize = require("../connection");
const { DataTypes } = require("sequelize");

const About = sequelize.define(
  "About",
  {
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cumple: {
      type: DataTypes.DATE,
      allowNull: false,
      get() {
        // formateo fecha dia mes año
        return this.getDataValue("cumple").toLocaleString("es-AR", {
          dateStyle: "medium",
        });
      },
    },
  },
  {
    timestamps: false,
  },
  {
    tableName: "About",
  }
);

module.exports = About;

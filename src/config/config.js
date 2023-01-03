require("dotenv").config();

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  PORT:process.env.DBPORT
};

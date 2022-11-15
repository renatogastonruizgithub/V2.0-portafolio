const express = require("express");
const sequelize = require("./src/dataBase/connection");
const { indexDb } = require("./src/dataBase/models/index");
require("dotenv").config();
const cors = require("cors");
const indexRouter = require("./src/routes/index");
const { errorHandled } = require("./src/middlewares/errors");
const { validPortafolio } = require("./src/middlewares/validPortafolio");
const app = express();
app.use(express.json());
app.use("/", validPortafolio, errorHandled, indexRouter);

/* app.use((req, res, next) => {
  next(res.status(404).send("url not found"));
});
 */

/* app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"],
})); */

app.use(indexDb); // llamo a todos los modelos

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor funcionando en el puerto ${process.env.SERVER_PORT}`);
});

const express = require("express");
const sequelize = require("./src/dataBase/connection");
const { indexDb } = require("./src/dataBase/models/index");
require("dotenv").config();
const cors = require("cors");
const indexRouter = require("./src/routes/index");
const app = express();
app.use(express.json());

app.use("/", indexRouter);
app.use((req, res, next) => {
  next(res.status(404).json({ error: "url not found" }));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

/* app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"],
})); */

app.use(indexDb); // llamo a todos los modelos

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor funcionando en el puerto ${process.env.SERVER_PORT}`);
});

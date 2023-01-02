const express = require("express");
const sequelize = require("./src/dataBase/connection");
const { indexDb } = require("./src/dataBase/models/index");
require("dotenv").config();

const indexRouter = require("./src/routes/index");
const { apps } = require("./src/helpers/firebase");
const path = require("path");
const { route } = require("./src/routes/index");
const cors = require("cors");
const app = express();
 app.use(
  cors({
    origin: ["http://localhost:8080"],
  
  })
); 
app.use(express.json());

app.use("/", indexRouter); 

 app.use("/", express.static(path.join(__dirname, "publics/"))); 
 app.use("/", express.static(path.join(__dirname, "/client/frontend"))); 

app.get("/", (_req, res) => {
  res.sendFile(ruta.join(__dirname, "/client/frontend", "index.html"));
});
 
app.use((req, res, next) => {
  next(res.status(404).json({ error: "url not found" }));
});

// error handler
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.use(indexDb); 

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor funcionando en el puerto ${process.env.SERVER_PORT}`);
});

const express = require("express");
const indexDb = express();

indexDb.use(require("./Projects"));
indexDb.use(require("./Skills"));
indexDb.use(require("./About"));
indexDb.use(require("./details_project"));
indexDb.use(require("./portafolio"));
indexDb.use(require("./certificated"));
indexDb.use(require("./home"));
indexDb.use(require("./project_skill"));

module.exports = { indexDb };

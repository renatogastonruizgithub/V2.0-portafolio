const express = require("express");
const router = express.Router();
const {
  get,
  create,
  update,
  deleted,
} = require("../controllers/detailsController");
const upload = require("../helpers/upload");

router.get("/", get);
router.post("/:id", upload.array("imagen"), create); //pasar id del proyecto
router.put("/:id", update);
router.delete("/:id", deleted);

module.exports = router;

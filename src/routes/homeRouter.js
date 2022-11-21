const express = require("express");

const {
  get,
  create,
  Delete,
  update,
} = require("../controllers/homeController");
const upload = require("../helpers/upload");

const router = express.Router();
router.get("/", get);
router.post("/", upload.single("imagen"), create);
router.delete("/:id", Delete);
router.put("/:id", update);

module.exports = router;

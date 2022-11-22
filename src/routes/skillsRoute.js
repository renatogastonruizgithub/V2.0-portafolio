const express = require("express");
const router = express.Router();
const {
  create,
  Delete,
  update,
  get,
} = require("../controllers/skillsController.js");
const upload = require("../helpers/upload");

router.get("/", get);
router.post("/", upload.single("imagen"), create);
router.delete("/:id", Delete);
router.put("/:id", update);

module.exports = router;

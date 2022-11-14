const express = require("express");
const router = express.Router();
const {
  create,
  Delete,
  update,
  get,
} = require("../controllers/skillsController.js");

router.get("/", get);
router.post("/", create);
router.delete("/:id", Delete);
router.put("/:id", update);

module.exports = router;

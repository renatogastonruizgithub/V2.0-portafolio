const express = require("express");
const router = express.Router();
const {
  create,
  update,
  Delete,
  get,
} = require("../controllers/projectsController");

router.get("/", get);
router.post("/", create);
router.delete("/:id", Delete);
router.put("/:id", update);

module.exports = router;

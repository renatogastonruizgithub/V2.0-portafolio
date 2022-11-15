const express = require("express");

const {
  get,
  create,
  Delete,
  update,
} = require("../controllers/homeController");

const router = express.Router();
router.get("/", get);
router.post("/", create);
router.delete("/:id", Delete);
router.put("/:id", update);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  get,
  create,
  Delete,
  update,
} = require("../controllers/certificatesController");

router.get("/", get);
router.post("/", create);
router.delete("/:id", Delete);
router.put("/:id", update);

module.exports = router;

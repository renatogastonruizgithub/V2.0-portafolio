const express = require("express");
const router = express.Router();
const {
  get,
  create,
  Delete,
  update,
} = require("../controllers/certificatesController");
const upload = require("../helpers/upload");

router.get("/", get);
router.post("/", upload.single("imagen"), create);
router.delete("/:id", Delete);
router.put("/:id", upload.single("imagen"), update);

module.exports = router;

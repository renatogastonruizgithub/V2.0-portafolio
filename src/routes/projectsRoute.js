const express = require("express");
const router = express.Router();
const {
  create,
  update,
  Delete,
  get,
  deletedSkills,
  createSkills,
  getDetailsProject,
} = require("../controllers/projectsController");
const upload = require("../helpers/upload");

router.get("/", get);
router.get("/:id", getDetailsProject); //id del proyecto
router.post("/", upload.single("imagen"), create);
router.delete("/:id", Delete);
router.put("/:id", upload.single("imagen"), update);
router.post("/ProjectIdSkills/:id", createSkills);
router.delete("/ProjectIdSkillId/:idProjecto/:idSkill", deletedSkills);
module.exports = router;

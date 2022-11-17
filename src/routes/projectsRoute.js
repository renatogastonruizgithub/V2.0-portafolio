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

router.get("/", get);
router.get("/:id", getDetailsProject); //id del proyecto
router.post("/", create);
router.delete("/:id", Delete);
router.put("/:id", update);
router.post("/ProjectIdSkills/:id", createSkills);
router.delete("/ProjectIdSkillId/:idProjecto/:idSkill", deletedSkills);
module.exports = router;

const express = require("express");

const skills = require("./skillsRoute");
const projects = require("./projectsRoute");
const portafolio = require("./portafolioRoute");
const about = require("./aboutRouter");
const home = require("./homeRouter");
const detailsProjects = require("./detailsProjectRouter");
const router = express.Router();
// example of a route with index controller get function

router.use("/about", about);
router.use("/detailProjects", detailsProjects);
router.use("/home", home);
router.use("/portafolio", portafolio);
router.use("/skills", skills);
router.use("/projects", projects);

module.exports = router;

const express = require("express");

const skills = require("./skillsRoute");
const projects = require("./projectsRoute");
const portafolio = require("./portafolioRoute");
const about = require("./aboutRouter");
const home = require("./homeRouter");
const certificates = require("./certificatesRoutes");
const detailsProjects = require("./detailsRouter");
const sendEmail = require("./sendEmailRouter");
const router = express.Router();
// example of a route with index controller get function

router.use("/about", about);
router.use("/details", detailsProjects);
router.use("/home", home);
router.use("/portafolio", portafolio);
router.use("/skills", skills);
router.use("/projects", projects);
router.use("/certificates", certificates);
router.use("/email", sendEmail);
module.exports = router;

const express = require("express");
const {
 send
} = require("../controllers/sendEmailController");


const router = express.Router();
router.post("/", send);
module.exports = router;
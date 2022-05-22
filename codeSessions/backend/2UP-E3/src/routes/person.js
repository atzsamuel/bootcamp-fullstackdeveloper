const express = require("express");
const router = express.Router();

const { registerPerson, loginPerson } = require("../controllers/person");

router.post("/register", registerPerson);
router.post("/login", loginPerson);

module.exports = router;

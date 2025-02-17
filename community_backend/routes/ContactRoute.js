const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/ContactController");

router.post("/add-contact-message", ContactController.addContactMessage);

module.exports = router;
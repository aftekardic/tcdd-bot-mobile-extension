const express = require("express");
const { getTickets } = require("../controller/ticketController");
const router = express.Router();

router.post("/find-ticket", getTickets);

module.exports = router;

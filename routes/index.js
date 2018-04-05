const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/HomeController");
const controller = new HomeController();

// HomePage
router.get("/", (req, res) => controller.index(req, res));

module.exports = router;

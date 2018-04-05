const express = require("express");
const router = express.Router();

/**
 * Routing for Articles
 */
const PagesController = require("../controllers/PagesController");
const controller = new PagesController();

router.get("/about", (req, res) => controller.about(req, res));
router.get("/concept", (req, res) => controller.concept(req, res));
router.get("/contact", (req, res) => controller.contact(req, res));
router.get("/users", (req, res) => controller.users(req, res));
router.get("/articles", (req, res) => controller.articles(req, res));

module.exports = router;

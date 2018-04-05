const express = require("express");
const router = express.Router();
const jsonfile = require("jsonfile");

const Api = require("../models/Api");

/* GET home page. */
router.get("/", function(req, res, next) {
  const api = new Api();
  api.getCharacter(1);
  res.render("index", { title: "Express" });
});

module.exports = router;

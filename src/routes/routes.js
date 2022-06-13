const path = require("path");
const express = require("express");

const router = express.Router();

router.use(express.static(path.join(__dirname, "..", "..", "public")));

router.get("/", (req, res) => {
  res.sendFile("index.html");
});

router.get("/home", (req, res) => {
  res.redirect("/");
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "about.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "contact.html"));
});

module.exports = router;

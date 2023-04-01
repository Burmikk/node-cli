const express = require("express");
const router = express.Router();

// определим домашний роутер
router.get("/", (req, res) => {
  res.send("Это главный роутер");
});

// определим роутер about
router.get("/about", (req, res) => {
  res.json({ books: [] });
});

module.exports = { router };

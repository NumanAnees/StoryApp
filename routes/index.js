const express = require("express");
const router = express.Router();
// @desc    Login/Landing page
// @route   GET /
router.get("/", (req, res) => {
  res.send("hello");
});

// @desc    Login/Landing page
// @route   GET /
router.get("/dashboard", (req, res) => {
  res.send("hello from dashboard");
});

module.exports = router;

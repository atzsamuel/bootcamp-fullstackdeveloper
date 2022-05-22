const express = require("express");
const router = express.Router();

// all routes are prefixed with /api/category
const {
  createCategory,
  getCategories,
  getCategory,
} = require("../controllers/category");

// Create caterogy endpoint (POST)
router.post("/category", createCategory);

//Get all categories endpoint (GET)
router.get("/category", getCategories);

//Get category by id endpoint (GET)
router.get("/category/:id", getCategory);

module.exports = router;

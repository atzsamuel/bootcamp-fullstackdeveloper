const express = require("express");
const router = express.Router();
//GET ALL ---> GET
//GET BY ID ---> GET
//POST ----> POST

router.post("/category", (req, res, next) => {
  res.status(200).json({
    message: "POST request to /categories",
  });
});

router.get("/category", (req, res, next) => {
  res.status(200).json({
    message: "GET request to /category",
  });
});

router.get("/category/:id", (req, res, next) => {
  res.status(200).json({
    message: "GET request to /category id",
  });
});

module.exports = router;

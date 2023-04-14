const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET REQUEST to /products ",
  });
});

router.post("/", (req, res, next) => {
  const product = {
    name:req.body.name,
    price:req.body.price
  }
  res.status(201).json({
    message: "handling POST REQUEST to /products ",
    createdProduct:product
  });
});
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special ID",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "you passed and ID",
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Updated the Product ",
  });
});
router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted Product ",
  });
});

module.exports = router;

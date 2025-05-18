const express = require("express");
const router = express.Router();

const admin = require("./admin");
const productController = require("../controllers/products");

router.get("/", productController.getProduct);

module.exports = router;

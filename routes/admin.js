const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);

// Edit product
router.post("/products", adminController.postEditProduct);
router.get("/products/:productid", adminController.getEditProduct);

router.get("/products", adminController.getProducts);
router.post("/delete-product", adminController.postDeleteProduct);
module.exports = router;

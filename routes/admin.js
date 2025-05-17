const express = require("express");
const router = express.Router();
const app = express();

const path = require("path");
router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});
router.get("/products", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

module.exports = router;

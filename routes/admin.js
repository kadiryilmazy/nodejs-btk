const express = require("express");
const router = express.Router();

const path = require("path");

router.get("/add-product", (req, res, next) => {
    res.render("add-product", { title: "Add a New Product" });
});

router.post("/add-product", (req, res, next) => {
    res.redirect("/");
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send(`<a href="/admin/add-product">Add-Product</a><br/>
        <a href="/">Home</a>`);
});

module.exports = router;

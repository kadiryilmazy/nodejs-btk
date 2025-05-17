const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

router.get("/add-product", (req, res, next) => {
    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Add a New Product</title>
        </head>
        <body>
            <form action="/admin/add-product" method="POST">
            <input type="text" name="productName" />
            <input type="submit" value="Save Product" />
            </form>
            <a href="add-product">Add-Product</a><br/>
        <a href="/">Home</a>
        </body>
        </html>
        `
    );
});

router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;

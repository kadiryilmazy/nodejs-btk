const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
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
            <form action="product" method="POST">
            <input type="text" name="productName" />
            <input type="submit" value="Save Product" />
            </form>
        </body>
        </html>
        `
    );
});

app.use("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/product-list", (req, res, next) => {
    res.send("<h1>Product list page</h1>");
});

app.use("/", (req, res, next) => {
    res.send("<h1>home page</h1>");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

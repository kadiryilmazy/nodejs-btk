const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
    console.log("Loglama yapıldı..");
    next();
});

app.use("/add-product", (req, res, next) => {
    res.send("<h1>Add product page</h1>");
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

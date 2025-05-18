const Product = require("../models/product");

exports.getProduct = (req, res, next) => {
    const products = Product.getAll();

    res.render("index", { title: "Homepage", products: products, path: "/" });
};

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
        title: "Add a New Product",
        path: "/admin/add-product",
    });
};

exports.postAddProduct = (req, res, next) => {
    console.log("Gelen veri:", req.body);
    const product = new Product(req.body.name, req.body.price, req.body.imageUrl, req.body.description);

    product.saveProduct();
    res.redirect("/");
};

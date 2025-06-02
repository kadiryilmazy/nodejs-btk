const Product = require("../models/product");
const Category = require("../models/category");

exports.getProducts = (req, res, next) => {
    const products = Product.getAll();
    res.render("admin/products", {
        title: "Admin Products",
        products: products,
        path: "/admin/products",
        action: req.query.action || "",
    });
};

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
        title: " New Product",
        path: "/admin/add-product",
        categories: Category.getAll(),
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(
        req.body.name,
        req.body.price,
        req.body.imageUrl,
        req.body.description,
        req.body.categoryId
    );
    product.saveProduct();
    res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
    const product = Product.getById(req.params.productid);
    const categories = Category.getAll();
    res.render("admin/edit-product", {
        title: "Edit Product",
        path: "/admin/products",
        product: product,
        categories: categories,
    });
};

exports.postEditProduct = (req, res, next) => {
    const product = Product.getById(req.body.id);
    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.description = req.body.description;
    product.categoryId = req.body.categoryId;
    res.redirect("/admin/products?action=edit");
};

exports.postDeleteProduct = (req, res, next) => {
    const productId = req.body.id;
    Product.deleteById(productId);
    res.redirect("/admin/products?action=delete");
};

const Product = require("../models/product");
const Category = require("../models/category");

exports.getIndex = (req, res, next) => {
    const categories = Category.getAll();
    Product.getAll()
        .then((products) => {
            res.render("shop/index", { title: "Shopping", products: products[0], path: "/", categories: categories });
        })
        .catch((err) => {
            console.error("Error fetching products:", err);
        });
};

exports.getProducts = (req, res, next) => {
    const categories = Category.getAll();
    Product.getAll()
        .then((products) => {
            res.render("shop/products", {
                title: "Products",
                products: products[0],
                path: "/products",
                categories: categories,
                action: req.query.action || "",
            });
        })
        .catch((err) => {
            console.error("Error fetching products:", err);
        });
};

exports.getProductsByCategoryId = (req, res, next) => {
    const categoryId = req.params.categoryid;
    const products = Product.getProductsByCategoryId(categoryId);
    const categories = Category.getAll();

    res.render("shop/products", {
        title: "Products",
        products: products,
        path: "/products",
        categories: categories,
        selectedCategory: categoryId,
    });
};

exports.getProduct = (req, res, next) => {
    const productId = req.params.productid;
    const product = Product.getById(productId);
    res.render("shop/product-detail", {
        title: product.name,
        product: product,
        path: "/products",
    });
};

exports.getProductsDetails = (req, res, next) => {
    res.render("shop/details", { title: "Details", path: "/details" });
};

exports.getCart = (req, res, next) => {
    res.render("shop/cart", { title: "Cart", path: "/cart" });
};

exports.getOrders = (req, res, next) => {
    res.render("shop/orders", { title: "Orders", path: "/orders" });
};

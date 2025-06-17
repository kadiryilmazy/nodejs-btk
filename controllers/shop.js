const Product = require("../models/product");
const Category = require("../models/category");

exports.getIndex = (req, res, next) => {
    Product.findAll({
        attributes: ["id", "name", "price", "imageUrl"],
    })
        .then((products) => {
            Category.findAll()
                .then((categories) => {
                    res.render("shop/index", {
                        title: "Shopping",
                        products: products,
                        categories: categories,
                        path: "/",
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getProducts = (req, res, next) => {
    Product.findAll({
        attributes: ["id", "name", "price", "imageUrl"],
    })
        .then((products) => {
            Category.findAll()
                .then((categories) => {
                    res.render("shop/products", {
                        title: "Products",
                        products: products,
                        categories: categories,
                        path: "/",
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getProductsByCategoryId = (req, res, next) => {
    const categoryid = req.params.categoryid;
    const model = [];

    Category.findAll()
        .then((categories) => {
            model.categories = categories;
            const category = categories.find((i) => i.id == categoryid);
            return category.getProducts();
        })
        .then((products) => {
            res.render("shop/products", {
                title: "Products",
                products: products,
                categories: model.categories,
                selectedCategory: categoryid,
                path: "/products",
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getProduct = (req, res, next) => {
    Product.findAll({
        attributes: ["id", "name", "price", "imageUrl", "description"],
        where: { id: req.params.productid },
    })
        .then((products) => {
            res.render("shop/product-detail", {
                title: products[0].name,
                product: products[0],
                path: "/products",
            });
        })
        .catch((err) => {
            console.log(err);
        });

    /*
    Product.findByPk(req.params.productid)
        .then((product) => {
            res.render('shop/product-detail', {
                title: product.name,
                product: product,
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        });
        */
};

exports.getCart = (req, res, next) => {
    req.user
        .getCart()
        .then((cart) => {
            return cart
                .getProducts()
                .then((products) => {
                    res.render("shop/cart", {
                        title: "Cart",
                        path: "/cart",
                        products: products,
                    });
                })
                .catch(() => {
                    console.log("Error getting cart products");
                });
        })
        .catch(() => {
            console.log("Error getting cart products");
        });
};
exports.getOrders = (req, res, next) => {
    res.render("shop/orders", {
        title: "Orders",
        path: "/orders",
    });
};

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    let quantity = 1;
    let userCart;
    req.user
        .getCart()
        .then((cart) => {
            userCart = cart;
            return cart.getProducts({ where: { id: productId } });
        })
        .then((products) => {
            let product;
            if (products.length > 0) {
                product = products[0];
            }
            if (product) {
                quantity += product.cartItem.quantity;
                return product;
            }
            return Product.findByPk(productId);
        })
        .then((product) => {
            userCart.addProduct(product, {
                through: { quantity: quantity },
            });
        })
        .catch(() => {
            console.log("Error getting cart products");
        });
};

exports.postCartItemDelete = (req, res, next) => {
    const productId = req.body.productid;

    req.user
        .getCart()
        .then((cart) => {
            return cart.getProducts({ where: { id: productId } });
        })
        .then((products) => {
            if (!products || products.length === 0) {
                throw new Error("Ürün sepette bulunamadı.");
            }

            const product = products[0];
            return product.cartItem.destroy();
        })
        .then(() => {
            res.redirect("/cart");
        })
        .catch((err) => {
            console.error("Sepetten ürün silinirken hata oluştu:", err);
            next(err); // Hata middleware’ine yönlendirme
        });
};

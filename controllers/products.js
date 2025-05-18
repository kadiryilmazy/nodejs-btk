const products = [
    {
        name: "Samsung S8",
        price: 500,
        image: "1.jpg",
        description: "Released in 2017 with a 5.8-inch display.",
    },
    {
        name: "Samsung S9",
        price: 600,
        image: "2.jpg",
        description: "Released in 2018 with a 5.8-inch display.",
    },
    {
        name: "Samsung S10",
        price: 700,
        image: "3.jpg",
        description: "Released in 2019 with a 6.1-inch display.",
    },
    {
        name: "Samsung S20",
        price: 800,
        image: "4.jpg",
        description: "Released in 2020 with a 6.2-inch display.",
    },
];

exports.getProduct = (req, res, next) => {
    res.render("index", { title: "Homepage", products: products, path: "/" });
};

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
        title: "Add a New Product",
        path: "/admin/add-product",
    });
};

exports.postAddProduct = (req, res, next) => {
    products.push({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
    });
    res.redirect("/");
};

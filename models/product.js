const products = [
    {
        name: "Sample Product",
        price: 19.99,
        imageUrl: "1.jpg",
        description: "This is a sample product.",
    },
    {
        name: "Sample Product",
        price: 19.99,
        imageUrl: "1.jpg",
        description: "This is a sample product.",
    },
    {
        name: "Sample Product",
        price: 19.99,
        imageUrl: "1.jpg",
        description: "This is a sample product.",
    },
];

module.exports = class Product {
    constructor(name, price, imageUrl, description) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }
    saveProduct() {
        products.push(this);
    }

    static getAll() {
        return products;
    }
};

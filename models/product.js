const products = [
    {
        id: "1",
        name: "Sample Product",
        price: 19.99,
        imageUrl: "1.jpg",
        description: "This is a sample product.",
    },
    {
        id: "2",
        name: "Sample Product",
        price: 19.99,
        imageUrl: "1.jpg",
        description: "This is a sample product.",
    },
    {
        id: "3",
        name: "Sample Product",
        price: 19.99,
        imageUrl: "1.jpg",
        description: "This is a sample product.",
    },
];

module.exports = class Product {
    constructor(name, price, imageUrl, description) {
        this.id = Math.floor(Math.random() * 99999) + 1;
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

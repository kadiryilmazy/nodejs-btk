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
        this.id = (Math.floor(Math.random() * 99999) + 1).toString();
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

    static getById(id) {
        const product = products.find((i) => i.id === id);
        if (!product) {
            return null;
        } else {
            return product;
        }
    }
    static Update(product) {
        const index = products.findIndex((i) => i.id === product.id);
        products[index].name = product.name;
        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
    }
};

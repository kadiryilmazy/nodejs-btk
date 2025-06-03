const Category = require("./category");
const connection = require("../utility/database");

module.exports = class Product {
    constructor(name, price, imageUrl, description, categoryId) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryId = categoryId || "1";
    }
    saveProduct() {}

    static getAll() {
        return connection.execute("SELECT * FROM products");
    }

    static getById(id) {}

    static getProductsByCategoryId(categoryId) {}

    static Update(product) {}
    static deleteById(id) {}
};

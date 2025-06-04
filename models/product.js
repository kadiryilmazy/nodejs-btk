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
    saveProduct() {
        return connection.execute("INSERT INTO products (name,price,imageUrl,description) VALUES (?,?,?,?)", [
            this.name,
            this.price,
            this.imageUrl,
            this.description,
        ]);
    }

    static getAll() {
        return connection.execute("SELECT * FROM products ");
    }

    static getById(id) {
        return connection.execute("SELECT * from products WHERE products.id=?", [id]);
    }

    static getProductsByCategoryId(categoryId) {}

    static Update(product) {
        return connection.execute(
            "UPDATE products SET products.name=?,products.price=?,products.imageUrl=?,products.description=? WHERE products.id=?",
            [product.name, product.price, product.imageUrl, product.description, product.id]
        );
    }
    static deleteById(id) {
        return connection.execute("DELETE FROM products WHERE id = ?", [id]);
    }
};

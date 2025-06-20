const getDb = require("../utility/database").getdb;
const mongodb = require("mongodb");

class Category {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    save() {
        const db = getDb();
        return db
            .collection("categories")
            .insertOne(this)
            .then((result) => {
                console.log("Category saved:", result);
                return result;
            })
            .catch((error) => {
                console.error("Error saving category:", error);
                throw error;
            });
    }

    static findAll() {
        const db = getDb();
        return db
            .collection("categories")
            .find()
            .toArray()
            .then((categories) => {
                console.log("Categories found:", categories);
                return categories;
            })
            .catch((error) => {
                console.error("Error finding categories:", error);
                throw error;
            });
    }
}

module.exports = Category;

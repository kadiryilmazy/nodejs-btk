const getDb = require("../utility/database").getdb;
const mongodb = require("mongodb");

class Category {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this._id = id ? new mongodb.ObjectId(id) : null;
    }

    save() {
        let db = getDb();
        if (this._id) {
            db = db
                .collection("categories")
                .updateOne({ _id: this._id }, { $set: this })
                .then((result) => {
                    console.log("Category updated:", result);
                    return result;
                })
                .catch((error) => {
                    console.error("Error updating category:", error);
                    throw error;
                });
        } else {
            db = db
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
        return db;
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

    static findById(categoryid) {
        const db = getDb();
        return db
            .collection("categories")
            .find({ _id: new mongodb.ObjectId(categoryid) })
            .next()
            .then((category) => {
                console.log("Category found:", category);
                return category;
            })
            .catch((error) => {
                console.error("Error finding category by ID:", error);
                throw error;
            });
    }
}

module.exports = Category;

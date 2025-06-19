const getDb = require("../utility/database").getdb;
const mongodb = require("mongodb");

class User {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this._id = id ? new mongodb.ObjectID(id) : null;
    }

    save() {
        const db = getDb();
        return db
            .collection("users")
            .insertOne(this)
            .then((result) => {
                console.log("User saved:", result);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    static findById(userId) {
        const db = getDb();
        return db
            .collection("users")
            .findOne({ _id: new mongodb.ObjectID(userId) })
            .then((user) => {
                return user;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static findByUserName(username) {
        const db = getDb();
        return db
            .collection("users")
            .findOne({ name: username })
            .then((user) => {
                return user;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = User;

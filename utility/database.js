require("dotenv").config();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
    const uri = process.env.MONGO_URI;
    MongoClient.connect(uri)

        .then((client) => {
            console.log("connected");
            _db = client.db("node-app");
            callback();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};
const getdb = () => {
    if (_db) {
        return _db;
    }
    console.log("No database found!");
};
module.exports = {
    mongoConnect,
    getdb,
};

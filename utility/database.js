require("dotenv").config();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    const uri = process.env.MONGO_URI;

    MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((client) => {
            _db = client.db("node-app");
            callback();
        })
        .catch((err) => {
            console.error("MongoDB bağlantı hatası:", err);
            throw err;
        });
};

const getdb = () => {
    if (_db) {
        return _db;
    }
    console.error("No database found! Bağlantı kurulmadı.");
    return null;
};

module.exports = {
    mongoConnect,
    getdb,
};

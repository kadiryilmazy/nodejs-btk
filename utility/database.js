require("dotenv").config();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoCon = (callback) => {
    const uri = process.env.MONGO_URI;
    MongoClient.connect(uri)

        .then((client) => {
            console.log("connected");
            callback(client);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

module.exports = mongoCon;

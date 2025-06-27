require("dotenv").config();
const mongoose = require("mongoose");

const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB bağlantısı başarılı");
    } catch (err) {
        console.error("❌ MongoDB bağlantı hatası:", err);
        process.exit(1);
    }
};

const getdb = () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }
    throw new Error("No Database Connection");
};

exports.mongoConnect = mongoConnect;
exports.getdb = getdb;

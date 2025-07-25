const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: String,
    imageUrl: String,
    date: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
    ],
});

module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");
const Product = require("./product");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    cart: {
        items: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
    },
});

userSchema.methods.addToCart = function (product) {
    const index = this.cart.items.findIndex((cp) => {
        return cp.productId.toString() === product._id.toString();
    });

    const updatedCartItems = [...this.cart.items];

    let itemQuantity = 1;
    if (index >= 0) {
        // cart zaten eklenmek istenen product var: quantity'i arttır
        itemQuantity = this.cart.items[index].quantity + 1;
        updatedCartItems[index].quantity = itemQuantity;
    } else {
        // updatedCartItems!a yeni bir eleman ekle
        updatedCartItems.push({
            productId: product._id,
            quantity: itemQuantity,
        });
    }

    this.cart = {
        items: updatedCartItems,
    };

    return this.save();
};

userSchema.methods.getCart = function (product) {
    const ids = this.cart.items.map((i) => {
        return i.productId;
    });

    return Product.find({
        _id: {
            $in: ids,
        },
    })
        .select("name price imageUrl")
        .then((products) => {
            return products.map((p) => {
                return {
                    name: p.name,
                    price: p.price,
                    imageUrl: p.imageUrl,
                    quantity: this.cart.items.find((i) => {
                        return i.productId.toString() === p._id.toString();
                    }).quantity,
                };
            });
        });
};

module.exports = mongoose.model("User", userSchema);

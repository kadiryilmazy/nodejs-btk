//DEFAULT PACKAGES
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

//SETTINGS
app.set("view engine", "pug");
app.set("views", "./views");

const Category = require("./models/category");
const Product = require("./models/product");
const User = require("./models/user");

//!SEQUELIZE
Category.hasMany(Product, { onDelete: "CASCADE" });
Product.belongsTo(Category, { foreignKey: { allowNull: false } });

Product.belongsTo(User);
User.hasMany(Product);

const sequelize = require("./utility/database");

sequelize
    .sync({ force: true })
    //.sync()
    .then(() => {
        User.findByPk(1)
            .then((user) => {
                if (!user) {
                    User.create({ name: "kadiryilmazy", email: "email@gmail.com" });
                }
                return user;
            })
            .then((user) => {
                Category.count().then((count) => {
                    if (count === 0) {
                        Category.bulkCreate([
                            { name: "Telefon", description: "telefon kategorisi" },
                            { name: "Bilgisayar", description: "bilgisayar kategorisi" },
                            { name: "Elektronik", description: "elektronik kategorisi" },
                        ]);
                    }
                });
            });
    })
    .catch((err) => {
        console.log(err);
    });
//  MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//ROUTES
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");
app.use("/admin", adminRoutes);
app.use(userRoutes);

//ERROR CONTROLLER
const errorController = require("./controllers/errors");
app.use(errorController.get404Page);

//SERVER
app.listen(3000, () => {
    console.log("listening on port 3000");
});

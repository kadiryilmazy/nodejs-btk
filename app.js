//DEFAULT PACKAGES
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

//SETTINGS
app.set("view engine", "pug");
app.set("views", "./views");

//! DATABASE MYSQL
const connection = require("./utility/database");

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

//?TESTING DATABASE CONNECTION
connection
    .execute("SELECT * FROM products")
    .then(([rows, fields]) => {
        console.log("Database connection successful. Products:", rows);
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
    });

//SERVER
app.listen(3000, () => {
    console.log("listening on port 3000");
});

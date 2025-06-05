//DEFAULT PACKAGES
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

//SETTINGS
app.set("view engine", "pug");
app.set("views", "./views");

//!SEQUELIZE
const sequelize = require("./utility/database");
sequelize
    .sync()
    .then((res) => {
        console.log("Succesfully sync" + res);
    })
    .catch((err) => console.log("Sequelize sync error" + err));

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

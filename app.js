const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
app.use("/admin", adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).send(
        `<h1>Page Not Found</h1>
        <a href="/admin/add-product">Add-Product</a><br/>
        <a href="/">Home</a>`
    );
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

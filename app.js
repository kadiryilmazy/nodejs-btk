const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
app.use("/admin", adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

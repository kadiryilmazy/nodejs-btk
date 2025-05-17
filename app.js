const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
    res.json({ message: "Hello from the API!" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

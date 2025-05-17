const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("middleware 1 worked");
    next();
});

app.use((req, res, next) => {
    console.log("middleware 2 worked");
    res.send("<h1>Hello from express</h1>");
    next();
});

app.use((req, res, next) => {
    console.log("middleware 3 worked");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

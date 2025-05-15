const url = require("url");
const address = "http://localhost:8080/default?year=2023&month=10";
const parsedUrl = url.parse(address, true);
console.log(parsedUrl);

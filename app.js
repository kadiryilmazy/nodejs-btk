const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // res.setHeader("Content-Type", "text/plain");
    // res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.statusMessage = "Ok";

    // res.write("Hello World");

    // res.write(
    //     JSON.stringify({
    //         message: "Hello World",
    //         status: "success",
    //         data: {
    //             name: "John Doe",
    //             age: 30,
    //             city: "New York",
    //         },
    //     })
    // );

    // res.write("<html><head><title>My First Server</title></head><body><h1>Hello World</h1></body></html>");

    fs.readFile("./index.html", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.statusMessage = "Internal Server Error";
            res.write("Error reading file");
            return res.end();
        } else {
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            res.statusMessage = "Ok";
            res.end(data);
        }
    });
});

server.listen(3000);
console.log("Server is running on port 3000");

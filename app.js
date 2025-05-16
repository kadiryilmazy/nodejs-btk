const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write(`<html>
            <head>
            <title>Enter Message</title>
            </head>
            <body>
            <form method="POST" action="/log">
                <input type="text" name="message" />
                <button type="submit">Save</button>
            </form>
            </body>
            </html>`);
        return res.end();
    }
    if (url === "/log" && method === "POST") {
        fs.appendFileSync("message.txt", "\nDummy");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
});

server.listen(3000);
console.log("Server is running on port 3000");

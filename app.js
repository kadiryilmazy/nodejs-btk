const http = require("http");
const fs = require("fs");
const qs = require("querystring");

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
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            console.log(qs.parse(parsedBody));
            fs.appendFileSync("message.txt", message);

            console.log(message);
        });

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
});

server.listen(3000);
console.log("Server is running on port 3000");

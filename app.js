const fs = require("fs");

// const files = fs.readdir("./", function () {
//     if (err) {
//         console.error("Error reading directory:", err);
//         return;
//     }
//     console.log("Files in directory:", files);
// });

// const data = fs.readFile("index.html", "utf8", function (err, data) {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log("File content:", data);
// });

// fs.writeFile("index.html", "<h1>Hello World</h1>", function (err) {
//     if (err) {
//         console.error("Error writing file:", err);
//         return;
//     }
//     console.log("File written successfully");
// });

// fs.appendFile("index.html", "<h1>Hello World</h1>", function (err) {
//     if (err) {
//         console.error("Error appending file:", err);
//         return;
//     }
//     console.log("File appended successfully");
// });

fs.rename("index.html", "index2.html", function (err) {
    if (err) {
        console.error("Error renaming file:", err);
        return;
    }
    console.log("File renamed successfully");
});

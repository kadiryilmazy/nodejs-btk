const path = require("path");

let result = path.resolve("app.js"); //tam yolu alır
console.log("resolve result-> " + result);

result = path.extname("app.js", "index.js"); // uzantıyı alır.Extension Name
console.log("Extension name result-> " + result);

result = path.parse(__filename); // dosya adını alır
console.log("Parse result-> " + result);

console.log("result root-> " + result.root);
console.log("result dir-> " + result.dir);
console.log("result base-> " + result.base);
console.log("result name-> " + result.name);
console.log("result ext-> " + result.ext);

console.log(result);

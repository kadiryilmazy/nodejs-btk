Tarayıcıda ki window a ek olarak node js de module.export yöntemiyle dışarıya açılıp, require methodu ile başka dosyalarda,
ilgili tanımlamalar kullanılabilir.F
--SCRIPT A
var firstName = "Kadir";
var privateAge = 30;
var log = function (name) {
console.log("Hello " + name);
};

log("Kadir");

//SCRIPT A EXPORT ISLEMI
module.exports.log = log;
module.exports.firstName = firstName;

--SCRIPT B
const scriptA = require("./scriptA.js"); //scriptA yı ekle

scriptA.log("script B says hello");

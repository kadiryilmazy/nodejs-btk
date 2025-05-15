// var controllerA = (function () {
//     //SCOPE FOR A

//     // PRIVATE VARIABLES
//     var age = 30;
//     var firstName = "Kadir";

//     //EXPORTED VARIABLES
//     return { firstName };
// })();

// console.log(controllerA.firstName);
// // console.log(controllerA.age); //undefined

var firstName = "Kadir";
var privateAge = 30;
var log = function (name) {
    console.log("Hello " + name);
};

log("Kadir");

module.exports.log = log;
module.exports.firstName = firstName;

console.log(module);

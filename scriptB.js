// var controllerB = (function () {
//     //SCOPE FOR B

//     // PRIVATE VARIABLES
//     var firstName = "Yılmaz";
//     var log = function () {
//         console.log("Hello " + firstName);
//     };

//     //EXPORTED VARIABLES
//     return { firstName, log };
// })();
// console.log(controllerB.firstName);

const scriptA = require("./scriptA.js");

scriptA.log("script B says hello");

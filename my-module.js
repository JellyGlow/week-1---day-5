// module.exports = {
//   PHI: 1.618,
//   explain: function() {
//     console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
//   }
// };

var critters = require("./my-moduleB.js");

console.log(critters.pigeons);
// log a Number

critters.explain();
// invokes the function `explain`
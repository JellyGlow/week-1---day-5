function outside() {
  return "outside";
}

//defining functions at the top of the doc

module.exports = {
  pigeons: Math.ceil(Math.random() * 100),
  explain: function() {
    console.log("It's ACTUALLY sunny in Vancouver today, and there are " + this.pigeons + " very happy pigeons.");
    console.log(outside());
  }
};

//exports at the end of the document

// var coolMath = require("./my-modules");

// console.log(coolMath.PHI);  // log a Number

// coolMath.explain();  // invokes the function `explain`
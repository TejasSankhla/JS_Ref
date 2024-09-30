console.log("Sanket" + "Singh");
/**
 * Both of them are already a string, 
 * so toprimitive conversion will also be a string
 * and we concatenate them
 */
console.log(undefined + "node");
/**
 * undefined -> "undefined"
 * "undefined"+"node" -> "undefinednode"
 */
console.log("5" + null);
/**
 * One of them is already a string, so both of them becomes a string
 * "5" + "null" -> "5null"
 */
console.log("sanket" + true);
console.log("sanket" + []);
console.log("sanket" + [null]);
console.log("sanket" + [null, undefined]);// only ,

// js implicitly type converts based on abstract operation 
//abst op are not availale to end users but used by js implicilty for type casting
// but are mentioned in the docs
// ToBoolean,ToNumber, ToString etc
// for more read docs
//for eg - op implicilty calls abs op
console.log("1111" - 1);
console.log("11a1" - 1);
console.log(NaN - NaN);
//ToNumber(undefiend) -> NAN
// ToNumber(NULL) -> 0
console.log(undefined - 5);
console.log(undefined - "5");
console.log(null - "5");
//empty obj ->0
console.log("empty obj");
console.log(10 - []);
console.log(10 - [""]);
console.log(10 - ["0"]);
console.log(10 - ["-0"]);
console.log(10 - [null]);
console.log(10 - [undefined]);
console.log(10 - [1, 2, 3]);//nan
console.log(10 - [[[]]]);

//symbol will give type error
//console.log(Symbol("123") - 30);

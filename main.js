// DIALOG BOXES

// alert prompt confirm
// console.log document.write

// alert("Vaxt bitti");

//let result = "chinara";
// result = window.confirm("tesdiq etmek istediyinize eminsinizmi?");

// if (result == true) {
//   console.log("netice OK-dir");
// } else {
//     console.log("netice CANCEL-dir")
// }

// window.prompt("Adinizi daxil edin", result);
// parseInt()

// console.time("response in-1");
// alert("Click to continue");
// console.timeEnd("response in-1");

// console.time("response in-2");
// alert("One more time");
// console.timeEnd("response in-2");
// console.log('%s has %f points', 'Sam', 100);
// console.error("warning message")

// log, time, timeEnd info, warn, error

// let number1 = "7";
// let number2 = "27";

// console.log("Hello world");
// console.log(5);
// console.log(number);
// console.log(26 + 7);
// console.log("5", 7);
// console.log(number1 + number2);

// console.time("response in")
// alert("Click me")
// console.timeEnd("response in")

// console.time("response in-2")
// alert("Click me - 2")
// console.timeEnd("response in-2")

// console.info("information");
// console.warn("warning message");
// console.error("error message ");

// document.writeln("Salam ")

// // single qoute ('') , double qoute(""), backtick(``)

// // single qoute ('')
// let firstName = 'I\'m Chinara ';
// console.log(firstName);

// // double qoute("")
// let firstName1 = "My name is \"Chinara\""
// console.log(firstName1)

// // backtick (``)
// let firstName2 = `Chinara`
// let firstName3 = 'Aysel'
// console.log(firstName2)

// console.log(`${firstName3}          ${firstName2}`)

// console.log('Aysel',               'Gunel')
// console.log("Aysel",                    "Chinara ")

// // \t- 1 tab bosluq
// // \n- 1 setir altda
// console.log("Hello\t world ")
// console.log("Hello\n world ")

// console.log(`Hello
// world`)

// // spead test
// function TestingDoubleQuote() {
//     console.time("quote-1")
//     const string1 = "double quote"
//     console.log(string1)
//     console.timeEnd("quote-1")
// }

// function TestingSingleQuote() {
//     console.time("quote-2")
//     const string2 = 'single quote'
//     console.log(string2)
//     console.timeEnd("quote-2")
// }

// function TestingBacktick() {
//     console.time("quote-3")
//     const string3 = `backtick`
//     console.log(string3)
//     console.timeEnd("quote-3")
// }
// TestingDoubleQuote()
// TestingSingleQuote()
// TestingBacktick()

/*  DATA TYPES

number, bigInt, string, boolean, null, undefined, object, symbol

*/

// // NUMBER TYPE - integer and floating point (decimal and exponantials)
// let number = 7;
// let number2 = -26;

// let number3 = 25.11;
// let number4 = 3e5; //300000
// console.log(number4)

// // infinity, -infinity, NaN(not a number)
// let num1 = 3/0;
// console.log(num1)

// let num2 = -3/0;
// console.log(num2)

// let num3 = 'ans'/3;
// console.log(num3)

// let num4 = NaN*5;
// console.log(num4)

// // BigInt

// // -(2^53-1) : (2^53-1) araliginda deyer alir

// let bigIntNumber1 = 6546141544148552752458741n;
// let bigIntNumber2 = 3n;

// let result = bigIntNumber2 + 5n;
// console.log(result)

// // STRING

// let stringName = "Chinara"
// let stringName1 = 'Chinara'
// let stringName2 = `Chinara`

// let charName = "q"

// Boolean type - true, false
let boolVar = true; // 1
let boolVar2 = false; // 0
let result1 = true < false; // false

let result2 = -5 < boolVar; // true
console.log(result1);
console.log(result2);

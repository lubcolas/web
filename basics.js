alert("Welcome to JavaScript Programming");
        document.write ("Hello World!");

// one-line Comment in Javascript

/* multiline comment in JavaScript */

// How to add javascript to our HTML document?

alert("Hello I am an external language");

// VARIABLES inJavaScript
/*
Declaring Variables 
*/
var volume;

// declare multiple variables at the same time:
var height, weight;

/* To declare and initialize variable use equality 
symbol (=) followed by the value of variable */
var amount = 10;
var height = 175, weight = 70;

// Variable can be declared without the var keyword
quantity = 11;

// Declaring variables With let keyword
let size = 12;

// Loosely typed variables
var speed = 100;
speed = "fast";

/* EVALUATING VARIABLES
If you declare a variable without assigned initial 
value its value is undefined. */
var month;
alert(month); //undefined

/*
If you try to read the value of the undeclared 
variable, it will generate a ReferenceError error:*/
alert(year); //ReferenceError

/* VARIABLE SCOPE
A variable declared within a function with using var
 keyword is local variable and has local scope. */

var globalVariable = "A"; // a global variable
function testScope1() {
    var localVariable = "B"; // a local variable
    document.write(globalVariable); // A
    document.write(localVariable); // B
}
 
document.write(globalVariable); // A
document.write(localVariable); // ReferenceError


/*
A variable declared within a code block or statement with 
using the let keyword is block-scoped variable and is limited
 to the block in which was declared. */

 function testScope2() {
    if (true) {
        var localVariable = "X"
        let blockVariable = "Y";
    }
    document.writeln(localVariable); // X
    document.writeln(blockVariable); // ReferenceError
}

// VARIABLE HOISTING
var x = 1;
function testHoisting() {
    alert(x); // displays undefined
    var x = 2;
    alert(x); // displays 2
}

function testHoisting2() {
    alert(y); // ReferenceError
    let y = 3;
}






















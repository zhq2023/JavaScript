/*
JavaScript is an object-based and event-driven scripting language used ot add interactivity to web pages. 
Here are some key points regarding the basic syntax of JavaScript:
*/


// 1. Variable declaration: Use the 'var', 'let', or 'const' keyword to decalre variables.

var x = 10;
let y = "Hello";
const z = true;


// 2. Data types: JavaScript has dynamic typing, and variable data types can change during runtime.

var number = 5; //Number
var text = "Hello"; //String
var flag = true;  //Boolean


// 3. Operators: Include arithmetic, comparison, and logical operators, among others.
var sum = 5 + 3;
var isEqual = (x === y);
var andOperator = (a && b);


// 4. Conditional Statements: Use 'if', 'else if', and 'else' for conditional logic.

if (condition){
    // code block
} else if (anotherCondition){
    // code block
} else {
    // code block
}


// 5. Loop statements: Use 'for', 'while', and 'do-while' for looping.

for (var i = 0; i < 5; i++){
    // loop body
}

while (condition){
    // loop body
}


// 6. Functions: Define functions using the 'function' keyword.

function add(a,b){
    return a + b;
}

var result = add(3, 4);


// 7. Arrays: Create and manipulate arrays.

var numbers = [1,2,3,4,5];
var firstElement = number[0];


// 8. Objects: Create and manipulate objects.

var person = {
    name: "John",
    age: 30,
    isStudent: false
};


// 9. Event handling: Handle user interaction events.

document.getElementById("myButton").addEventListener("click", function(){
    // code to handle the click event

});



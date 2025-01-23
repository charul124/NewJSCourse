
funcstate();
// console.log(namedFunction);
// namedFunction();
// console.log(a);
// a();
console.log(funcexp);
// b(firstclassFunction);


//---------------------------------------------
//function declaration : a function declaration is a function that is bound to an identifier or name
//function statement : a function statement is a function that is performed by a function declaration
function funcstate(){
    console.log(funcstate);
    console.log("I am a function statement");
}
//---------------------------------------------
//function expression : a function expression is a function that is assigned to a variable
//function expression can be named or anonymous
var funcexp = function(){
    console.log("I am a function expression");
}
console.log(funcexp); //gives the function definition
funcexp(); //gives the output
//gives undefined because function expression is not hoisted
//major diference between function statement and function expession is Hoisting
//---------------------------------------------
//anonymous function : functions that are not declared with a name and will give error
//are used in place where functions are used as values
        // function(){
        //     console.log("I am an anonymous function");
        // }
function anonyfunc(anotheranonymous){
    anotheranonymous();
}
anonyfunc(function(){
    console.log(anonyfunc);
    console.log("I am an anonymous function");
})
//---------------------------------------------
//named Functions : functions declare with a name using the function keyword
//cannot be called before they are defined
var a = function namedFunction(){
    console.log(namedFunction);
    console.log("I am a named function");
    // namedFunction(); // will give error and result in maximum call stack size exceeded
}
a();
//---------------------------------------------
//First Class Functions : functions that can be assigned to a variable, passed as an argument to another function and can be returned from another function
var z = function firstclassFunction(){
    console.log("I am a first class function");
}
function b(param1){
    console.log(param1);
    console.log("I am a function that accepts another function as an argument");
    param1();
}
b(z);
//---------------------------------------------
//Arrow Functions : a shorter syntax for writing function expressions
//does not have its own this, arguments, super or new.target
const arrowFunc = () => {
    console.log(arrowFunc);
    console.log("I am an arrow function");
}
//same can be written as 
const arrowfunction = () => console.log("I am an arrow function");
arrowFunc();
//---------------------------------------------
//Higher Order Functions : functions that accept another function as an argument or return another function as a return value
function copyarrayandmanipulate(input, instructions){
    const output = [];
    for(let i = 0; i < input.length; i++){
        output.push(instructions(input[i]));
    }
    return output;
}
const mulby2 = (input) => input*2;
function divby2(input){
    return input/2;
}
function add10(input){
    return input+10;
}
const mulres = copyarrayandmanipulate([1,2,3], mulby2);
console.log(mulres);
const divres = copyarrayandmanipulate([1,2,3], input => input/2);
console.log(divres);
const addres = copyarrayandmanipulate([1,2,3], add10);
console.log(addres);
//and for this example we can say that copyarrayandmanipulate is a higher order function and mulby2, divby2, add10 are callback functions
//Callback Functions : functions that are passed as an argument to another function
//---------------------------------------------
//IIFE : Immediately Invoked Function Expression
//scope of IIFE is limited to the function itself and does not pollute the global scope
(function iife(){
    console.log("I am an IIFE statement"); 
}());
//the upper one is the named iife and lower one is unnamed iife
( (name) => {
    console.log(`I am another ${name} statement`);
})("IIFE");
//---------------------------------------------
//Compose : the process of combining two or more functions to produce a new function
//Pipe : the process of combining two or more functions to produce a new function
const add2 = x => x+2;
const subtract1 = x => x-1;
const mul5 = x => x*5;

const result = add2(subtract1(mul5(10)));
console.log(result);
// const newresult = compose(add2, subtract1, mul5)(10);
// console.log(newresult);

// const compose = function(...functions){
//     return function(value){

//     }
// }

//Currying : the process of converting a function that takes multiple arguments into a function that takes them one at a time




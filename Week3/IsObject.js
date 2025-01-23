// IS everythign an object?
//okay so when we are checking the typeof differet data types we get those primitive dt
console.log("5 is : " + typeof 5);
console.log("Hello is : " + typeof "Hello");
console.log("True is : " + typeof true);
console.log("undefined is : " + typeof undefined);
console.log("null is : " + typeof null);
// //but when we check for array, object, function we get object
var a = [];
var b = {};
var c = function(){};
console.log("array is : " + typeof a);
console.log("object is : " + typeof b);
//functions are special kind of objects "callable objects" can be invoked or passed 
console.log("function is : " + typeof c);
console.log(c instanceof Object);

//so here we can see the concept of loose equality and strict equality 
//loose equality checks only the value and not the type and hence here the values gets coerced
//strict equality checks both the value and the type
console.log(null == undefined);
console.log(null === undefined);


//okay so everything in JS behaves like an object because 
//primitive data types will be wrapped in their object wrapper for fraction of time 
//technically this is called auto-boxing -> helps to give some functionality to primitive data types

//so why do we need objects?
//JS uses objects everywhere because we can store and manipulate data in objects
//    - Dynamic Properties : we can add and remove properties from objects at runtime
//    - prototypal inheritance : we can inherit properties and methods from other objects
//    - Encapsualtion : we can hide the properties and methods, data and behaviour from the outside world
//- classes, prototype - Object oriented JS
// -Prototype chain 
// - diff btw __proto__ and prototype
// - new and class keyword as tools to create objects and methods

// - my code should be : 
//    - easy to add new functionality (features)
//    - more effiecient and better performance
// - and through OOP paradigm we can achieve all of these

// we can bundle the data and the functions that operate on the data in a single unit called object
const user1 = {
    name : "Charul",
    score : 3,
    increment : function(){
        this.score++;
    }
};
user1.increment();
console.log(user1.name + "-> " + user1.score);

// we can also create object like this 
const user2 = Object.create(null);
user2.name = "John";
user2.score = 9;
user2.increment = user1.increment;

user2.increment();
console.log(user2.name + "-> " +user2.score);

function userCreate(name, score){
    const newuser = {};
    newuser.name = name;
    newuser.score = score;
    newuser.increment = function(){
        newuser.score++;
    };
    return newuser;
}

const user3 = userCreate('Peter', 10);
const user4 = userCreate('Sally', 12);
user3.increment();
user4.increment();
console.log(user3.name + "-> " +user3.score);
console.log(user4.name + "-> " +user4.score);

// - here we can see the problem that 
// - the increment function is created everytime we create a new user
// - and we can see that functions are same as they are just copies

// - solution is using the prototype chain 
// - we can store the increment func in one obj 
// - and interpreter which will find the func in that store 
// - when not found in the user1 as we will link it with the store using object.create() technique
// - and hence we call it prototypal feature of JS

function usercreate2(name, score){
    const newnewuser = Object.create(userstore);
    // and here what happens is a __proto__ link is created 
    // between the newnewuser and userstore
    newnewuser.name = name;
    newnewuser.score = score;
    return newnewuser;
};

const userstore = {
    increment : function(){this.score++;},
    login : function(){console.log("user logged in");}
};

const user5 = usercreate2('kayla', 20);
const user6 = usercreate2('dan', 42);
user5.increment();
user6.increment();
console.log(user5.name + "-> " +user5.score);
console.log(user6.name + "-> " +user6.score);
//- this is the implicit parameter that is passed to the function
//- and then this actually refers to the object that is calling the function
console.log(user5.hasOwnProperty('score')); // true
user6.hasOwnProperty('email');
//- all objects in JS has a __proto__ property
//- and hence object.prototype is the top of the prototype chain
//-hasownproperty is a method that is present in the object.prototype
//- and can be found out in prototype chaining

//okay so we can use new keyword that atoumates all these stuff 
//and we can use class keyword to create objects and methods
function usercreate3(name, score){
    this.name = name;
    this.score = score;
}
usercreate3.prototype.increment = function(){
    this.score++;
}
const user7 = new usercreate3('will', 21);
user7.increment();
console.log(user7.name + "-> " +user7.score);

//okay so we can also use class keyword to create objects and methods combined
//- benefits are : faster to write and easier to read

class Usercreator{
    constructor (name, score){
        this.name = name;
        this.score = score;
    }
    increment(){this.score++};
    login(){console.log("Logged In");}
}
const user100 = new Usercreator("Kim", 200);
user100.increment();
console.log(user100.name+ "-> "+ user100.score);


//- functions v/s classes (more or less both are functions)
//- class is more used when we dive into the object-oriented paradigm
//- like dealing with inheritance, and other stuff

function functionone(){}  
//- functions are hoisted
//- also functions may or maynot take the input arguments and returns the output
//- action - focused
const functionnew = new functionone();

class Course {}  
//- we cannot access class before initialization
//- we say these are state-focused
const course = new Course;

console.log(typeof functionone); // function
console.log(typeof Course); // function

//- talking about advantages and disadv
//  - functions are more flexible and can be passed around as arguments
//  - classes are more rigid and have a more strict structure
//  - functions can be tested independently for the better unit testings 
//  - classes are more useful when we dive into the object-oriented paradigm
//  - we use oops more for real world scenarios

// to send custom function into the microtaskqueue in JS we use 
// queueMicrotask() method
// To switch back to the callback queue, you simply use asynchronous functions 
// that are not promise-based, like setTimeout with a delay of 0 milliseconds.


//- A network thread is more common to implement it as a single thread that runs asynchronously, 
//- meaning it can handle multiple network requests concurrently without blocking the main thread 
//- by utilizing non-blocking I/O operations


//-CSS specificity : !important > inline > id > class > element


// async function fetchData() {
//     try {
//         const response = await fetch('https://api.github.com/users/charul124');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// }

// fetchData();
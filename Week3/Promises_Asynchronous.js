// JS is a single threaded -> one command runs at a time
//         Synchronous    -> each line will run in order the code appears
// -Asynchronicity -> feature that makes dynamic websites possible
function sayhello(){
    console.log("Hello one");
}
function blockforsec(){
    console.log("Blocking one");
}
// setTimeout(sayhello, 1000);
setTimeout(sayhello, 1000); 
// when after 0ms also it prints hello after "Mefirst" 
// it is because of queue of the callback function "Callback queue"
// blockforsec();
console.log("Me First");
setTimeout(blockforsec, 1000);
console.log("Me Second");

//so JS typically has a single execution, memory environment and a single call stack
//there are new components Promises, Event Loops, and web APIs that are not part of JS engine but are part of browser

//so Web Browser is JS + browser features and 
// actually JS to interact with the browser uses different browser features like DOM(document), Timer(SetTimeout), Requests(Fetch) etc.

//callback hell -> when we have multiple nested callbacks
// also called the "Pyramid of Doom" as grows in size and complexity
// Inversion of control : the callback function is not called by us but by the browser
// 


// -promises -> significant ES6 feature
// -Promises are the foundation for handling asynchronous operations in modern JavaScript. 
// -They represent the eventual result (success or failure) of an asynchronous operation.
// -promises objects are used to handle asynchronous operations in JavaScript
// console.log("-----------------Promises-----------------");

function display(data){
    console.log(data.status);
}

const anotherdata = fetch('https://api.github.com/users/charulagrl');
anotherdata.then(display);

// console.log("Me First");
// how it goes is like first the display function is declared in the memory
// then the fetch function is called and the promise object(here anotherdata) is created
// with the two labels -> value(for whatever response we get from the fetch)
// and unfulfilled array(for what instructions we want to perform in the future)
// and then the promise object executes with display function in the call stack and then the response is displayed

// function displaydata(data){    // first declared in memory
//     console.log(data);
// }


function printhello(){       // second declared in memory
    console.log("Hello two");
}
setTimeout(printhello,0);     //starts executing and send to browser with the timer
const futuredata = fetch('https://api.github.com/users/charul124');    // futuredata : third declared in the memory
futuredata.then(function displaydata(data){    // fourth declared in the memory
    console.log(data.status);
});
console.log("Me First two");

//promise data is stored in the microtask queue
//and the callback function is stored in the callback queue
//and the call stack is empty
//also promise data is immutable, resolved just once


//we can also have promise chaining 
//and when we are chaining promises we have to return the promise object from the then method
            // createorder(cart)
            //     .then(function(orderid){return proceedpayment(orderid)})
            //     .then((paymentstatus) => proceedshipping(paymentstatus));// with arrow function

const cart = ["shoes", "jacket", "watch"];
creteneworder(cart)
.then(function(orderid){
    console.log("Order id is : " + orderid);
    return orderid;
})
.then(function(orderid){
    return proceedpayment(orderid);
})
.then(function(paymentstatus){
    console.log(paymentstatus);
})
.catch(function(err){
    console.log(err.message);
})

function proceedpayment(orderid){
    return new Promise(function(resolve, reject){
        resolve("Payment Successful");
    })
}
function creteneworder(cart) {
    const pr = new Promise(function(resolve, reject){
        
        //how we can reject the promise
        if(!Validatecart(cart)){
            reject(Error("Cart is empty"));
        }

        //how we can resolve the promise
        const orderid = 7453;
        if(orderid){
            resolve(orderid);
        }
    })
    
    return pr;
};

function Validatecart(cart){
    return true;
}

// all these enables :
// Non-blocking applications 
// Web browser can do other things while waiting for the response
// JS is a single threaded -> one command runs at a time
//         Synchronous    -> each line will run in order the code appears
// -Asynchronicity -> feature that makes dynamic websites possible
function sayhello(){
    console.log("Hello");
}
function blockforsec(){
    console.log("Blocking");
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

// -promises -> significant ES6 feature
// -promises objects are used to handle asynchronous operations in JavaScript
// console.log("-----------------Promises-----------------");
// function display(data){
//     console.log(data);
// }
git ini
git add .
git commit -m "{initial_commit_message}"
git branch -M main
git remote add origin https://github.com/{username}/{repository_name}.git
git push -u origin main
// const anotherdata = fetch('https://api.github.com/users/charulagrl');
// anotherdata.then(display);

// console.log("Me First");
//how it goes is like first the display function is declared in the memory
//then the fetch function is called and the promise object(here anotherdata) is created
//with the two labels -> value(for whatever response we get from the fetch)
// and unfulfilled array(for what instructions we want to perform in the future)
// and then the promise object executes with display function in the call stack and then the response is displayed

// function displaydata(data){    // first declared in memory
//     console.log(data);
// }
// function printhello(){       // second declared in memory
//     console.log("Hello");
// }
// setTimeout(printhello,0);     //starts executing and send to browser with the timer
// const futuredata = fetch('https://api.github.com/users/charul124');    // futuredata : third declared in the memory
// futuredata.then(displaydata);
// console.log("Me First");

// all these enables :
// Non-blocking applications 
// Web browser can do other things while waiting for the response
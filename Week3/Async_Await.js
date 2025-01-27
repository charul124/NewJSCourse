//-Async functions always returns a promise
//-await is a keyword which can only be used inside the async keyword

// async function getData(){
//     return "Hello Charul";
// }
// const ex1 = getData();
// ex1.then(function(res){
//     console.log(res);
// })

const p = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Promise is Resolved");
    }, 4000);
})

//while waiting for the promise to resolve the 
//JS does not wait, but function suspends and 
async function handlepromise(){
    console.log("Hello World");
    const val = await p;
    await newpromise();
    console.log("Hello Charul");
    console.log(val);
}
handlepromise();

//-here to handle errors we have try-catch block
const APIKey = "https://api.github.com/users/charul124";

async function newpromise(){
    try {
        const data = await fetch(APIKey);
        const JsonVal = await data.json();

        console.log(JsonVal);
        
    } catch (err) {
        console.log(err);
    }
}


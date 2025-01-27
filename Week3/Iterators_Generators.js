//callback hell
setTimeout(function(){
    console.log("hey I am callback");
}, 3000);

//Iterators
        //we regualrly have lists or collections or data where
        //we want to go through each item and do something with it 

        //iterators are objects that have a next method
        //next method returns an object with two properties

const numbers = [1,4,5];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


//- There are 2 parts to applying functions to collections of data:
    // 1. process of accessing each element
    // 2. what we wasto ot do with each elelemnt


function createfunc(){
    function add2(num){
        return num+2;
    }
    return add2;
}

//- when we return a function from another function is when we get back
//- more than just a returned function, and iterators come into play

const newfunc = createfunc();
const result = newfunc(10);
console.log(result);

function example2(array){
    let i = 0;
    function inner(){
        const ele = array[i];
        i++;
        return ele;
    }
    return inner;
}

const nextele = example2([1,2]);
console.log(nextele());
console.log(nextele());

//-so iterators turn our data into a stream of data we can access


//Generators
function creatflow(array){
    let i = 0;
    const inner= {
        next : function(){
            const element = array[i];
            i++;
            return element;
        }
    }
    return inner;
}


const returnflow = creatflow([12,45,66]);
const res1 = returnflow.next();
console.log(res1);
const res2 = returnflow.next();
console.log(res2);

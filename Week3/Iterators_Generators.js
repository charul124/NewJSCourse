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


//completed some challenges from csbin.io for iterators and generators

function sumFunc(arr) {
  // YOUR CODE HERE
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
  return function() {
    let elem = arr[i];
    i++;
    return elem;
  };
}

// Uncomment the lines below to test your work
const array2 = ["a", "b", "c", "d"];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'

// CHALLENGE 2
/**
 * Create an iterator with a next method that returns each value of the array when .next is called.
 */

function nextIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
  return {
    next: function () {
      let elem = arr[i];
      i++;
      return elem;
    },
    current: function () {
      if (i >= arr.length) return null;
      return arr[i];
    },
  };
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3

// CHALLENGE 3
/**
 * Write code to iterate through an entire array using your nextIterator and sum the values.
 */

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
  let sum = 0;
  const iterate = nextIterator(arr);
  while (iterate.current() !== null) {
    sum += iterate.next();
  }
  return sum;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10

// CHALLENGE 4

/**
 * Create an iterator with a next method that returns each value of a set when .next is called
 */
function setIterator(set) {
  // YOUR CODE HERE
  let it = set.values();
  return {
    next: function() {
      return it.next().value;
    }
  };
}

// Uncomment the lines below to test your work
const mySet = new Set("hey");
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'
